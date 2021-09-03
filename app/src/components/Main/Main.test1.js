import { render, screen } from '@testing-library/react';
import Main from './Main';
import { getProductInfo } from '../../js/scrap';

describe('<Main />', () => {
  it('has title', () => {
    const keyword = 'vitamin';
    const lastPageNum = '417';

    render(<Main keyword={keyword} lastPageNum={lastPageNum} />);

    screen.getByText('😎vitamin｜📄417');
  });

  let product;

  it('has product list', async () => {
    const URL =
      'https://kr.iherb.com/pr/california-gold-nutrition-vitamin-c-gummies-natural-orange-flavor-gelatin-free-90-gummies/69569';
    product = await getProductInfo(URL);

    render(<Main products={[product]} />);
    screen.getByTestId('product-list');
  });

  it('has controller', () => {
    const keyword = 'vitamin';
    const currentPageNumber = '1';
    const lastPageNumber = '417';

    render(
      <Main keyword={keyword} currentPageNum={currentPageNumber} lastPageNum={lastPageNumber} products={[product]} />
    );

    screen.getByTestId('controller');
    screen.getByText('vitamin');
    expect(screen.getByTestId('currentPageNumber').value).toBe('1');
    expect(screen.getByTestId('lastPageNumber').textContent).toBe('/417');
  });
});
