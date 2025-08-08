import { applyBoatNumberColor } from '@/lib/applyBoatNumberColor';

describe('applyBoatNumberColor', () => {
  it('returns correct class for valid boat numbers', () => {
    expect(applyBoatNumberColor(1)).toBe('bg-white text-black');
    expect(applyBoatNumberColor(2)).toBe('bg-black text-white');
    expect(applyBoatNumberColor(3)).toBe('bg-red-500 text-white');
    expect(applyBoatNumberColor(4)).toBe('bg-blue-500 text-white');
    expect(applyBoatNumberColor(5)).toBe('bg-yellow-300 text-black');
    expect(applyBoatNumberColor(6)).toBe('bg-green-500 text-white');
  });

  it('returns null for invalid boat numbers', () => {
    expect(applyBoatNumberColor(0)).toBeNull();
    expect(applyBoatNumberColor(7)).toBeNull();
    expect(applyBoatNumberColor(999)).toBeNull();
  });
});
