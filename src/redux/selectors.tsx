import { createSelector, Selector } from "reselect";
import { RootState } from "./store"
import { Product } from "./types";

const normalizeText = (text: string): string => {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
};

const getProducts: Selector<RootState, Product[]> = (state: RootState) => state.products;
const selectSearchTerm: Selector<RootState, string> = (state: RootState) => state.searchTerm;
const sortOption: Selector<RootState, string> = (state: RootState) => state.sortOption;

const getSortedProductsByName = createSelector(
  getProducts,
  (products: Product[]) => {
    return products.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
);

const getFilteredProducts = createSelector(
  [getProducts, selectSearchTerm],
  (products, searchTerm) => {
    if (!searchTerm) {
      return products;
    }
    return searchTerm ? products.filter(product =>
      normalizeText(product.name).includes(normalizeText(searchTerm)) ||
      normalizeText(product.description).includes(normalizeText(searchTerm))
    ) : products;
  }
);

const sortProducts = (products: Product[], sortOption: string) => {
  const sortedProducts = [...products];

  switch (sortOption) {
    case 'NA':
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'ND':
      sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'DA':
      sortedProducts.sort((a, b) => a.description.localeCompare(b.description));
      break;
    case 'DD':
      sortedProducts.sort((a, b) => b.description.localeCompare(a.description));
      break;
    default:
      break;
  }

  return sortedProducts;
};

const getFilteredAndSortedProducts = createSelector(
  [getFilteredProducts, sortOption],
  (filteredProducts, sortOption) => {
    return sortProducts(filteredProducts, sortOption);
  }
);

export {
  getProducts,
  getSortedProductsByName,
  getFilteredAndSortedProducts,
};
