import { render, screen } from '@testing-library/react';
import Scroll from './Scroll';

describe('<Scroll />', () => {
  it('has top button and bottom button', () => {
    render(<Scroll />);

    screen.getByText('TOP');
    screen.getByText('BOTTOM');
  });
});
