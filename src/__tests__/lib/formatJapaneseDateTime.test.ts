import { formatJapaneseDateTime } from '@/lib/formatJapaneseDateTime';

describe('formatJapaneseDateTime', () => {
  it('should format date string correctly', () => {
    const input = '2025-08-10 15:30';
    const expected = '2025年08月10日 15時30分';

    expect(formatJapaneseDateTime(input)).toBe(expected);
  });

  it('should handle single digit month and day correctly', () => {
    const input = '2025-01-01 09:05';
    const expected = '2025年01月01日 09時05分';

    expect(formatJapaneseDateTime(input)).toBe(expected);
  });

  it('should handle midnight time correctly', () => {
    const input = '2025-08-10 00:00';
    const expected = '2025年08月10日 00時00分';

    expect(formatJapaneseDateTime(input)).toBe(expected);
  });
});
