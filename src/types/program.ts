export type Programs = {
  programs: Program[];
};

export type Program = {
  race_date: string;
  race_stadium_number: number;
  race_number: number;
  race_closed_at: string;
  race_grade_number: number;
  race_title: string;
  race_subtitle: string;
  race_distance: number;
  boats: Boat[];
};

export type Boat = {
  racer_boat_number: number;
  racer_name: string;
  racer_number: number;
  racer_class_number: number;
  racer_branch_number: number;
  racer_birthplace_number: number;
  racer_age: number;
  racer_weight: number;
  racer_flying_count: number;
  racer_late_count: number;
  racer_average_start_timing: number;
  racer_national_top_1_percent: number;
  racer_national_top_2_percent: number;
  racer_national_top_3_percent: number;
  racer_local_top_1_percent: number;
  racer_local_top_2_percent: number;
  racer_local_top_3_percent: number;
  racer_assigned_motor_number: number;
  racer_assigned_motor_top_2_percent: number;
  racer_assigned_motor_top_3_percent: number;
  racer_assigned_boat_number: number;
  racer_assigned_boat_top_2_percent: number;
  racer_assigned_boat_top_3_percent: number;
};
