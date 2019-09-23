import Header from '../../atoms/Header';
import SecondaryHeader from '../../atoms/SecondaryHeader';
import ProductList from '../../organisms/ProductList';
import { getProductsByCategory } from '../../services/products';

function CategoryPage({ categoryName, products = [] }) {
  return <div>
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
