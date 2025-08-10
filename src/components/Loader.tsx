import { RingLoader } from 'react-spinners';

export const Loader = () => (
  <div className={`flex justify-center items-center h-screen`}>
    <RingLoader color={`#3b82f6`} size={60} data-testid={`loader-container`} />
  </div>
);
