import axios from "axios";

const BASE_URL = "https://www.demo.salmon-gcp.com";

const getDisplayPrice = prices =>
  prices.filter(({ usage }) => usage === "Display")[0];

export const getProductsByCategory = async id => {
  const { data } = await axios(
    `${BASE_URL}/search/resources/store/1/productview/byCategory/${id}?currency=USD`
  );

  const products = data.catalogEntryView && 
    data.catalogEntryView.map(product => ({
      id: product.uniqueID,
      name: product.name,
      thumbnail: `${BASE_URL}${product.thumbnail}`,
      price: getDisplayPrice(product.price)
    })) || [];

  const categoryName = data.breadCrumbTrailEntryView && data.breadCrumbTrailEntryView.pop().label;

  return {
    products,
    categoryName
  };
};
