const colors: Record<number, string> = {
  1: 'bg-white text-black',
  2: 'bg-black text-white',
  3: 'bg-red-500 text-white',
  4: 'bg-blue-500 text-white',
  5: 'bg-yellow-300 text-black',
  6: 'bg-green-500 text-white',
};

// 枠番によって背景色と文字色を適用
export const applyBoatNumberColor = (boatNumber: number): string | null => {
  return colors[boatNumber] ?? null;
};
