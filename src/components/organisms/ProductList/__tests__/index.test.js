import { shallow } from 'enzyme';
import ProductList from '../';
import Product from '../../../molecules/Product';

test('a list of products are rendered', () => {
  const output = shallow(<ProductList products={[
    { name: 'product-one', id: 1 }
  ]} />);

  expect(output.find(Product).props()).toHaveProperty('name', 'product-one');
});