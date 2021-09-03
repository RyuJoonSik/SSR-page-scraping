import { render, screen } from '@testing-library/react';
import ProductContentContainer from './ProductContentRow';
import { getProductInfo } from '../../js/scrap';

describe('<ProductContentContainer />', () => {
  let product;

  it('has star rate, reivew count, stock', async () => {
    const URL =
      'https://kr.iherb.com/pr/california-gold-nutrition-vitamin-c-gummies-natural-orange-flavor-gelatin-free-90-gummies/69569';
    product = await getProductInfo(URL);

    render(<ProductContentContainer product={product} />);
    expect(screen.getByTestId('product-star')).toHaveTextContent('⭐4.8');
    expect(screen.getByTestId('product-review')).toHaveTextContent('👨‍👩‍👦‍👦26530');
    expect(screen.getByTestId('product-state')).toHaveTextContent('✔️');
  });

  it('has original price, special price', async () => {
    render(<ProductContentContainer product={product} />);
    expect(screen.getByTestId('product-price')).toHaveTextContent('$9.00');
    expect(screen.getByTestId('product-special-price')).toHaveTextContent('$4.50');
  });

  it('has URL, imgs, supplement table, check state false', () => {
    render(<ProductContentContainer product={product} />);
    expect(screen.getByTestId('product-URL')).toHaveTextContent('🔗');
    expect(screen.getByTestId('product-imgs')).toHaveTextContent('📷');
    expect(screen.getByTestId('product-supplement-table')).toHaveTextContent('💊');
    expect(screen.getByTestId('product-check-state')).toHaveTextContent('🟦');
  });
});
