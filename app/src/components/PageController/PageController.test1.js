import { render, screen } from '@testing-library/react';
import PageController from './PageController';

describe('<PageController />', () => {
  it('has title', () => {
    render(<PageController />);

    screen.getByText('Controller');
  });

  it('has keyword', () => {
    const keyword = 'vitamin';

    render(<PageController keyword={keyword} />);

    screen.getByText('vitamin');
  });

  it('has content', () => {
    render(<PageController />);

    screen.getAllByTestId('pagination');
    screen.getAllByTestId('pagination-button');
  });

  it('passes first page num, last page num', () => {
    const currentPageNum = '1';
    const lastPageNum = '417';

    render(<PageController currentPageNum={currentPageNum} lastPageNum={lastPageNum} />);

    expect(screen.getByTestId('currentPageNumber').value).toBe('1');
    expect(screen.getByTestId('lastPageNumber').textContent).toBe('/417');
  });

  it('renders top button, bottom button', () => {
    render(<PageController />);

    screen.getByText('TOP');
    screen.getByText('BOTTOM');
  });

  it('renders all check button', () => {
    render(<PageController />);

    screen.getByText('All check');
  });

  it('renders excel export button', () => {
    render(<PageController />);

    screen.getByText('Excel export');
  });
});
