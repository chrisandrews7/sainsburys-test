import styled from 'styled-components';
import colors from '../../theme/colors';

const Title  = styled.h1`
  color: ${colors.get('darkGrey')};
  text-align: center;
  font-weight: 400;
`;

function Header({ children }) {
  return <Title>{children}</Title>
}

export default Header;
