import { applyWeightColor } from '@/lib/applyWeightColor';

describe('applyBoatNumberColor', () => {
  it('returns correct class for valid weights', () => {
    expect(applyWeightColor(0, 0)).toBe('');
    expect(applyWeightColor(0, 1)).toBe('');
    expect(applyWeightColor(1, 0)).toBe('');
    expect(applyWeightColor(1, 1)).toBe('');
    expect(applyWeightColor(1, 2)).toBe('bg-red-100');
    expect(applyWeightColor(2, 1)).toBe('bg-blue-100');
  });
});
