// 当日と前日の体重を比較して背景色を適用
export const applyWeightColor = (current: number, previous: number): string => {
  if (current === 0 || previous === 0) { return ''; }
  if (current > previous) { return 'bg-blue-100'; }
  if (current < previous) { return 'bg-red-100'; }
  return '';
};
