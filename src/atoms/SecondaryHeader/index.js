import styled from 'styled-components';
import colors from '../../theme/colors';

const SmallTitle  = styled.span`
  color: ${colors.get('mediumGrey')};
  font-size: 1rem;
`;

function SecondaryHeader({ children }) {
  return <SmallTitle>{children}</SmallTitle>
}

export default SecondaryHeader;
