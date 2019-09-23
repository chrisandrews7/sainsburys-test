
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import colors from '../../theme/colors';
import Header from '../../components/atoms/Header';
import SecondaryHeader from '../../components/atoms/SecondaryHeader';
import ProductList from '../../components/organisms/ProductList';
import { getProductsByCategory } from '../../services/products';

const PageStyle = createGlobalStyle`
  body {
    background: ${colors.get('lightGrey')}
    font-family: sans-serif;
  }
`;

function CategoryPage({ categoryName, products = [] }) {
  return <div>
    <Normalize />
    <PageStyle />

    <Header>
      {categoryName} <SecondaryHeader>({products.length} items)</SecondaryHeader>
    </Header>

    <ProductList products={products}></ProductList>
  </div>
}

CategoryPage.getInitialProps = ({ query }) => {
  const { id } = query;
  return getProductsByCategory(id);
}

export default CategoryPage;
