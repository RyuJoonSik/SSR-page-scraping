import { render, screen, waitFor } from '@testing-library/react';
import ProductContent from './ProductContent';
import * as scrap from '../../js/scrap';
import userEvent from '@testing-library/user-event';
import * as html2canvas from 'html2canvas';

jest.mock('html2canvas', () => {
  const originalModule = jest.requireActual('html2canvas');

  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn().mockImplementation(() => {
      // console.log('html2canvas call');
      return { toDataURL: jest.fn() };
    }),
  };
});

describe('<ProductContent />', () => {
  let product;

  describe('star rate, reivew count, stock', () => {
    it('has star rate, reivew count, stock', async () => {
      const URL =
        'https://kr.iherb.com/pr/california-gold-nutrition-vitamin-c-gummies-natural-orange-flavor-gelatin-free-90-gummies/69569';
      product = await scrap.getProductInfo(URL);

      render(<ProductContent star={product.star} review={product.review} state={product.state} />);
      expect(screen.getByTestId('product-star')).toHaveTextContent('⭐4.8');
      expect(screen.getByTestId('product-review')).toHaveTextContent('👨‍👩‍👦‍👦26530');
      expect(screen.getByTestId('product-state')).toHaveTextContent('✔️');
    });

    it('has no star rate, no reivew count, no stock', async () => {
      render(<ProductContent star={null} review={null} state="Out of Stock" />);
      expect(screen.getByTestId('product-star')).toHaveTextContent('⭐0');
      expect(screen.getByTestId('product-review')).toHaveTextContent('👨‍👩‍👦‍👦0');
      expect(screen.getByTestId('product-state')).toHaveTextContent('❌');
    });
  });

  describe('price', () => {
    it('has original price, special price', () => {
      render(<ProductContent originalPrice={product.originalPrice} specialPrice={product.specialPrice} />);
      expect(screen.getByTestId('product-price')).toHaveTextContent('$9.00');
      expect(screen.getByTestId('product-special-price')).toHaveTextContent('$4.50');
    });

    it('has only original price', () => {
      render(<ProductContent originalPrice={product.originalPrice} specialPrice={null} />);
      expect(screen.getByTestId('product-price')).toHaveTextContent('$9.00');
      expect(screen.queryByTestId('product-special-price')).toBeNull();
    });
  });

  describe('URL, imgs, supplement table, check state', () => {
    it('has URL, imgs, supplement table, check state false', () => {
      render(
        <ProductContent
          URL={product.URL}
          imgURLs={product.imgURLs}
          supplementTable={product.supplementTable}
          isChecked={product.isChecked}
        />
      );

      expect(screen.getByTestId('product-URL')).toHaveTextContent('🔗');
      expect(screen.getByTestId('product-imgs')).toHaveTextContent('📷');
      expect(screen.getByTestId('product-supplement-table')).toHaveTextContent('💊');
      expect(screen.getByTestId('product-check-state')).toHaveTextContent('🟦');
    });

    it('has no supplement table, check state true', () => {
      render(<ProductContent supplementTable={null} isChecked={true} />);
      expect(screen.queryByTestId('product-supplement-table')).toBeNull();
      expect(screen.getByTestId('product-check-state')).toHaveTextContent('☑️');
    });

    // it('downloads product images', async () => {
    //   render(
    //     <ProductContent
    //       URL={product.URL}
    //       imgURLs={product.imgURLs}
    //       supplementTable={product.supplementTable}
    //       isChecked={product.isChecked}
    //       title={product.title}
    //     />
    //   );
    //   jest.spyOn(scrap, 'getIMG').mockResolvedValue(Image());
    //   jest.spyOn(scrap, 'downloadFile').mockImplementation(() => {});
    //   const jsdomAlert = window.alert;
    //   window.alert = () => {};
    //   const spy = jest.spyOn(window, 'alert');
    //   const button = screen.getByTestId('product-imgs');
    //   userEvent.click(button);
    //   await waitFor(() => expect(scrap.getIMG).toHaveBeenCalled());
    //   expect(spy).toHaveBeenCalledWith(`${product.title} '${product.imgURLs.length}장' 다운 완료`);
    //   scrap.getIMG.mockRestore();
    //   scrap.downloadFile.mockRestore();
    //   spy.mockRestore();
    //   window.alert = jsdomAlert;
    // });

    // it('downloads supplement image', async () => {
    //   render(
    //     <ProductContent
    //       URL={product.URL}
    //       imgURLs={product.imgURLs}
    //       supplementTable={product.supplementTable}
    //       isChecked={product.isChecked}
    //       title={product.title}
    //     />
    //   );
    //   const jsdomAlert = window.alert;
    //   window.alert = () => {};
    //   const spy = jest.spyOn(window, 'alert');
    //   const button = screen.getByTestId('product-supplement-table');

    //   jest.spyOn(scrap, 'downloadFile').mockImplementation(() => {});
    //   userEvent.click(button);
    //   await waitFor(() => expect(spy).toHaveBeenCalledWith(`영양 성분 정보 다운 완료`));
    //   spy.mockRestore();
    //   scrap.downloadFile.mockRestore();

    //   window.alert = jsdomAlert;
    // });
  });
});
