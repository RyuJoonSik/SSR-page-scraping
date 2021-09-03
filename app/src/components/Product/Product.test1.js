import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getProductInfo } from '../../js/scrap';
import Product from './Product';

describe('<Product />', () => {
  let product;

  it('has a title', async () => {
    const URL =
      'https://kr.iherb.com/pr/california-gold-nutrition-vitamin-c-gummies-natural-orange-flavor-gelatin-free-90-gummies/69569';
    product = await getProductInfo(URL);

    render(<Product product={product} />);

    screen.getAllByTitle(
      'California Gold Nutrition, Vitamin C Gummies, Natural Orange Flavor, Gelatin Free, 90 Gummies'
    );
  });

  it('has a image link', () => {
    render(<Product product={product} />);

    screen.getByTestId('product-img-link');
    screen.getByAltText(product.imgURLs[0]);
  });

  it('has a content', () => {
    render(<Product product={product} />);

    screen.getByTestId('product-content');
  });

  it('copies title', async () => {
    render(<Product product={product} />);

    const title = screen.getByText(
      'California Gold Nutrition, Vitamin C Gummies, Natural Orange Flavor, Gelatin Free, 90 Gummies'
    );

    global.alert = jest.fn();
    navigator.clipboard = { writeText: jest.fn(() => Promise.resolve) };

    userEvent.click(title);
    await waitFor(() => expect(global.alert).toHaveBeenCalledWith('제품명이 복사되었습니다.'));
  });
});
