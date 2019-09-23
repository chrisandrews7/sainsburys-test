import styled from 'styled-components';
import colors from '../../theme/colors';

const currencies = new Map([
  ['USD', '$'],
  ['GBP', '£'],
]);

const Name = styled.h2`
  color: ${colors.get('darkGrey')};
  font-size: 1.1rem;
  font-weight: 400;
`;

const Price = styled.span`
  color: ${colors.get('darkGrey')};
  font-size: 1.2rem;
  font-weight: 600;
`;

const Image = styled.img`
  width: 100%;
`;

function Product({ name, thumbnail, price }) {
  return <div>
    <Image src={thumbnail} />
    <Name>{name}</Name>
    <Price>{currencies.get(price.currency)}{price.value}</Price>
  </div>
}

export default Product;
