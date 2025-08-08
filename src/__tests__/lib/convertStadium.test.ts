import { convertStadiumName, convertStadiumNumber } from '@/lib/convertStadium';

describe('convertStadiumName', () => {
  it('returns correct stadium names for valid stadium numbers', () => {
    expect(convertStadiumName(1)).toBe('桐生');
    expect(convertStadiumName(2)).toBe('戸田');
    expect(convertStadiumName(3)).toBe('江戸川');
    expect(convertStadiumName(4)).toBe('平和島');
    expect(convertStadiumName(5)).toBe('多摩川');
    expect(convertStadiumName(6)).toBe('浜名湖');
    expect(convertStadiumName(7)).toBe('蒲郡');
    expect(convertStadiumName(8)).toBe('常滑');
    expect(convertStadiumName(9)).toBe('津');
    expect(convertStadiumName(10)).toBe('三国');
    expect(convertStadiumName(11)).toBe('びわこ');
    expect(convertStadiumName(12)).toBe('住之江');
    expect(convertStadiumName(13)).toBe('尼崎');
    expect(convertStadiumName(14)).toBe('鳴門');
    expect(convertStadiumName(15)).toBe('丸亀');
    expect(convertStadiumName(16)).toBe('児島');
    expect(convertStadiumName(17)).toBe('宮島');
    expect(convertStadiumName(18)).toBe('徳山');
    expect(convertStadiumName(19)).toBe('下関');
    expect(convertStadiumName(20)).toBe('若松');
    expect(convertStadiumName(21)).toBe('芦屋');
    expect(convertStadiumName(22)).toBe('福岡');
    expect(convertStadiumName(23)).toBe('唐津');
    expect(convertStadiumName(24)).toBe('大村');
  });

  it('returns null for invalid stadium numbers', () => {
    expect(convertStadiumName(0)).toBeNull();
    expect(convertStadiumName(25)).toBeNull();
    expect(convertStadiumName(999)).toBeNull();
  });
});

describe('convertStadiumNumber', () => {
  it('returns correct stadium numbers for valid stadium names', () => {
    expect(convertStadiumNumber('桐生')).toBe(1);
    expect(convertStadiumNumber('戸田')).toBe(2);
    expect(convertStadiumNumber('江戸川')).toBe(3);
    expect(convertStadiumNumber('平和島')).toBe(4);
    expect(convertStadiumNumber('多摩川')).toBe(5);
    expect(convertStadiumNumber('浜名湖')).toBe(6);
    expect(convertStadiumNumber('蒲郡')).toBe(7);
    expect(convertStadiumNumber('常滑')).toBe(8);
    expect(convertStadiumNumber('津')).toBe(9);
    expect(convertStadiumNumber('三国')).toBe(10);
    expect(convertStadiumNumber('びわこ')).toBe(11);
    expect(convertStadiumNumber('住之江')).toBe(12);
    expect(convertStadiumNumber('尼崎')).toBe(13);
    expect(convertStadiumNumber('鳴門')).toBe(14);
    expect(convertStadiumNumber('丸亀')).toBe(15);
    expect(convertStadiumNumber('児島')).toBe(16);
    expect(convertStadiumNumber('宮島')).toBe(17);
    expect(convertStadiumNumber('徳山')).toBe(18);
    expect(convertStadiumNumber('下関')).toBe(19);
    expect(convertStadiumNumber('若松')).toBe(20);
    expect(convertStadiumNumber('芦屋')).toBe(21);
    expect(convertStadiumNumber('福岡')).toBe(22);
    expect(convertStadiumNumber('唐津')).toBe(23);
    expect(convertStadiumNumber('大村')).toBe(24);
  });

  it('returns null for invalid stadium names', () => {
    expect(convertStadiumNumber('')).toBeNull();
    expect(convertStadiumNumber('競艇')).toBeNull();
  });
});
