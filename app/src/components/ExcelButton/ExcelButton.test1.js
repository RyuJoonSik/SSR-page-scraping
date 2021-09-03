import { render, screen } from '@testing-library/react';
import ExcelButton from './ExcelButton';

describe('<ExcelButton />', () => {
  it('has all check button', () => {
    render(<ExcelButton />);
    screen.getByText('Excel export');
  });
});
