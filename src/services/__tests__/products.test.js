import axios from 'axios';
import { getProductsByCategory } from '../products';

jest.mock('axios');

test('an array of products are returned', () => {
  axios.mockResolvedValue({
    data: {
      catalogEntryView: [
        {
          uniqueID: 123,
          name: 'Tablet 13inch',
          thumbnail: '/image.svg',
          price: [
            {
              usage: 'Display',
              value: '400.0'
            }
          ]
        }
      ]
    }
  });

  return expect(getProductsByCategory('1234')).resolves.toHaveProperty('products', [{
    id: 123,
    name: 'Tablet 13inch',
    thumbnail: 'https://www.demo.salmon-gcp.com/image.svg',
    price: {
      usage: 'Display',
      value: '400.0'
    }
  }]);
});

test('a category name is returned', () => {
  axios.mockResolvedValue({
    data: {
      breadCrumbTrailEntryView: [
        {
          label: 'one'
        },
        {
          label: 'two'
        }
      ]
    }
  });

  return expect(getProductsByCategory('1234')).resolves.toHaveProperty('categoryName', 'two');
});

test('an empty array is returned when no products are found', () => {
  axios.mockResolvedValue({
    data: {}
  });

  return expect(getProductsByCategory('1234')).resolves.toHaveProperty('products', []);
});
