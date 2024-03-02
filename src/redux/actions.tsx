import {
  SET_PRODUCTS,
  OPEN_DRAWER,
  ADD_TO_CART,
  DELETED_CART,
  SET_SEARCH_TERM,
  SET_SORT_OPTION,
  DELETE_QUANTITY,
} from "./types";
import { Product, ProductShopping } from "./types";

const setProducts = (data: Product[]) => {
  return { type: SET_PRODUCTS, payload: data };
};

const openDrawer = (isOpenDrawer: Boolean) => {
  return { type: OPEN_DRAWER, payload: isOpenDrawer };
};

const addToCart = (data: ProductShopping) => {
  return { type: ADD_TO_CART, payload: data };
};

const deletedCart = () => {
  return { type: DELETED_CART };
};

const setSearchTerm = (searchTerm: string) => {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

const setSortOption = (sortOption: string) => {
  return { type: SET_SORT_OPTION, payload: sortOption };
};

const deleteQuantity = (isDeletedQuantity: Boolean) => {
  return { type: DELETE_QUANTITY, payload: isDeletedQuantity };
};

export {
  setProducts,
  openDrawer,
  addToCart,
  deletedCart,
  setSearchTerm,
  setSortOption,
  deleteQuantity,
}


