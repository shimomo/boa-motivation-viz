import { fetchPrograms } from '@/lib/fetchPrograms';

describe('fetchPrograms', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('fetches JSON for the past 7 days starting from the specified date', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({ mock: 'data' })
    }) as jest.Mock;

    const baseDate = new Date('2025-08-07T00:00:00Z');
    const result = await fetchPrograms(baseDate);

    expect(global.fetch).toHaveBeenCalledTimes(7);

    const expectedDates = [
      '20250807',
      '20250806',
      '20250805',
      '20250804',
      '20250803',
      '20250802',
      '20250801',
    ];
    expectedDates.forEach((date, index) => {
      expect(global.fetch).toHaveBeenNthCalledWith(
        index + 1,
        `https://boatraceopenapi.github.io/programs/v2/${date}.json`
      );
    });

    expect(result).toEqual(
      Array(7).fill({ mock: 'data' })
    );
  });
});
