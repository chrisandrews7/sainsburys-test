import { shallow } from 'enzyme';
import CategoryPage from '../[id]';
import Header from '../../../atoms/Header';
import ProductList from '../../../organisms/ProductList';

test('the header is rendered with the category name', () => {
  const output = shallow(<CategoryPage categoryName={'Tablets'} />);

  expect(output.find(Header).contains('Tablets')).toBe(true);
});

test('the list of products in the category are rendered', () => {
  const output = shallow(<CategoryPage products={[{ id: 1 }]} />);

  expect(output.find(ProductList).props()).toHaveProperty('products', [{ id: 1 }]);
});