import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';
import { getProductInfo } from '../../js/scrap';

describe('<ProductList />', () => {
  let product;

  it('has Product', async () => {
    const URL =
      'https://kr.iherb.com/pr/california-gold-nutrition-vitamin-c-gummies-natural-orange-flavor-gelatin-free-90-gummies/69569';
    product = await getProductInfo(URL);

    render(<ProductList products={[product]} />);

    screen.getAllByTestId('product');
  });
});
