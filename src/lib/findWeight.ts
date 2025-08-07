import type { Programs } from '@/types/program';

export const findWeight = (data: Programs, racerNumber: number): number | null => {
  for (const program of data.programs) {
    for (const boat of program.boats) {
      if (boat.racer_number === racerNumber) {
        return boat.racer_weight;
      }
    }
  }

  return null;
};
