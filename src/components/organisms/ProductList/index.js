import styled from 'styled-components';
import media from "styled-media-query";

import Product from '../../molecules/Product';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;

  ${media.lessThan('medium')`
    padding: 0;
    align-items: center;
    justify-content: center;
  `}
`;

const ListItem  = styled.li`
  list-style: none;
  margin: 0 1.2rem 1.2rem 0;

  ${media.lessThan('small')`
    width: 48%;
    margin: 1%;
  `}
`;

function ProductList({ products }) {
  return <List>
    {products.map(product =>
      <ListItem key={product.id}>
        <Product {...product}></Product>
      </ListItem>
    )}
  </List>
}

export default ProductList;
