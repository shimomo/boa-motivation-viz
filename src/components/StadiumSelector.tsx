'use client';

import { convertStadiumName } from '@/lib/convertStadium';

type Props = {
  stadiumNumbers: number[];
  selectedStadiumNumber: number | null;
  setSelectedStadiumNumber: (stadiumNumber: number) => void;
  isSelectorVisible: boolean;
  toggleSelectorVisible: () => void;
};

export const StadiumSelector = ({ stadiumNumbers, selectedStadiumNumber, setSelectedStadiumNumber, isSelectorVisible, toggleSelectorVisible }: Props) => {
  return (
    <div className={`w-full max-w-md mx-auto mt-6`}>
      <button className={`w-full flex justify-between items-center px-4 py-2 rounded-md bg-blue-100`} onClick={toggleSelectorVisible}>
        <span>開催場選択</span>
        <svg className={`w-5 h-5 transform transition-transform duration-300`} xmlns={`http://www.w3.org/2000/svg`} fill={`none`} viewBox={`0 0 24 24`} stroke={`currentColor`}>
          <path strokeLinecap={`round`} strokeLinejoin={`round`} strokeWidth={`2`} d={`M19 9l-7 7-7-7`} />
        </svg>
      </button>

      <div className={`mt-2 space-y-2 p-4 rounded-md ${isSelectorVisible ? '' : 'hidden'}`}>
        {stadiumNumbers.map(stadiumNumber => (
          <div key={stadiumNumber} className={`flex items-center mb-4`}>
            <input id={`stadium-number-${stadiumNumber}`} type={`radio`} checked={selectedStadiumNumber === stadiumNumber} onChange={() => setSelectedStadiumNumber(stadiumNumber)} />
            <label htmlFor={`stadium-number-${stadiumNumber}`} className={`ms-2 text-sm font-medium text-gray-900`}>{convertStadiumName(stadiumNumber)}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
