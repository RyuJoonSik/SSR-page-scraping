import { render, screen } from '@testing-library/react';
import CheckButton from './CheckButton';

describe('<CheckButton />', () => {
  it('has all check button', () => {
    render(<CheckButton />);
    screen.getByText('All check');
  });
});
