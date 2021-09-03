import { render, screen } from '@testing-library/react';
import PaginationButton from './PaginationButton';

describe('<PaginationButton />', () => {
  it('has class', () => {
    const moveTo = 'first';

    render(<PaginationButton moveTo={moveTo} />);

    const className = 'pagination-button pagination-button--' + moveTo;
    const button = screen.getByTestId('pagination-button');

    expect(button).toHaveClass(className);
  });
});
