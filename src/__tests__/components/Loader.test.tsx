import { render, screen } from '@testing-library/react';
import { Loader } from '@/components/Loader';

describe('Loader', () => {
  it('renders the loader container', () => {
    render(<Loader />);
    expect(screen.getByTestId('loader-container')).toBeInTheDocument();
  });
});
