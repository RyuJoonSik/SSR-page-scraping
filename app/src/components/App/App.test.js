import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('<App />', () => {
  it('renders Header and Main', () => {
    render(<App />);

    screen.getByTestId('header');
    // screen.getByTestId('main');
  });

  it('searches keyword', async () => {
    // render(<App />);
    // userEvent.type(screen.getByPlaceholderText('keyword'), 'vitamin');
    // userEvent.click(screen.getByTitle('search'));
    // await screen.findByText('😎vitamin｜📄417');
    // await waitFor(() => expect(screen.getAllByTestId('product').length).toBe(24));
    // screen.getByTestId('controller');
    // const curPageNum = screen.getByTestId('currentPageNumber');
    // expect(curPageNum.value).toBe('1');
    // expect(screen.getByTestId('lastPageNumber').textContent).toBe('/417');
    // const buttons = screen.getAllByTestId('pagination-button');
    // const firstPageBtn = buttons[0];
    // const prevPageBtn = buttons[1];
    // const nextPageBtn = buttons[2];
    // const lastPageBtn = buttons[3];
    // const topBtn = screen.getByTitle('TOP');
    // const bottomBtn = screen.getByTitle('BOTTOM');
    // global.window.scroll = () => {};
    // const spy = jest.spyOn(global.window, 'scroll');
    // userEvent.click(topBtn);
    // expect(spy).toHaveBeenCalledWith(0, 0);
    // const Y = document.body.scrollHeight - window.innerHeight;
    // userEvent.click(bottomBtn);
    // expect(spy).toHaveBeenCalledWith(0, Y);
  });
});
