import { findWeight } from '@/lib/findWeight';
import type { Programs } from '@/types/program';

describe('findWeight', () => {
  let programs: Programs;

  beforeEach(() => {
    programs = {
      programs: [
        {
          race_date: '2025-08-01',
          race_stadium_number: 1,
          race_number: 1,
          race_closed_at: '2025-08-01 12:00:00',
          race_grade_number: 2,
          race_title: '開設７２周年記念 北陸艇王決戦',
          race_subtitle: '優勝戦',
          race_distance: 1800,
          boats: [
            {
              racer_boat_number: 4,
              racer_name: '桐生順平',
              racer_number: 4444,
              racer_class_number: 1,
              racer_branch_number: 11,
              racer_birthplace_number: 7,
              racer_age: 38,
              racer_weight: 52.1,
              racer_flying_count: 0,
              racer_late_count: 0,
              racer_average_start_timing: 0.14,
              racer_national_top_1_percent: 0,
              racer_national_top_2_percent: 0,
              racer_national_top_3_percent: 0,
              racer_local_top_1_percent: 0,
              racer_local_top_2_percent: 0,
              racer_local_top_3_percent: 0,
              racer_assigned_motor_number: 0,
              racer_assigned_motor_top_2_percent: 0,
              racer_assigned_motor_top_3_percent: 0,
              racer_assigned_boat_number: 0,
              racer_assigned_boat_top_2_percent: 0,
              racer_assigned_boat_top_3_percent: 0,
            },
          ],
        },
      ],
    };
  });

  it('returns the correct racer weight when racer number exists', () => {
    expect(findWeight(programs, 4444)).toBe(52.1);
  });

  it('returns null when racer number does not exist', () => {
    expect(findWeight(programs, 4000)).toBeNull();
  });
});
