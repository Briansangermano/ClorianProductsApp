import {
  SET_PRODUCTS,
  OPEN_DRAWER,
  ADD_TO_CART,
  DELETED_CART,
  ProductShopping,
  Product,
  SET_SEARCH_TERM,
  SET_SORT_OPTION,
  DELETE_QUANTITY,
} from "./types";

interface State {
  products: Product[];
  productsShopping: ProductShopping[];
  openDrawer: boolean;
  searchTerm: string;
  sortOption: string;
  isDeletedQuantity: boolean;
}

const initialState: State = {
  products: [],
  openDrawer: false,
  productsShopping: [],
  searchTerm: '',
  sortOption: 'NA',
  isDeletedQuantity: false,
};

interface Action {
  type: string;
  payload?: any;
}

const rootReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case OPEN_DRAWER:
      return {
        ...state,
        openDrawer: action.payload,
      };

    case ADD_TO_CART:
      const updatedCart = [...state.productsShopping];
      const productIndex = updatedCart.findIndex(item => item.id === action.payload.id);
      if (productIndex !== -1) {
        const updatedProducts: ProductShopping[] = updatedCart.map((product: ProductShopping) => {
          return (product.id === action.payload.id) ? { ...product, quantity: action.payload.quantity } : product;
        });
        return { ...state, productsShopping: updatedProducts };
      } else {
        updatedCart.push(action.payload);
        return { ...state, productsShopping: updatedCart, };
      }

    case DELETED_CART:
      return {
        ...state,
        productsShopping: [],
        openDrawer: false,
      };

    case SET_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.payload
      };

    case SET_SORT_OPTION:
      return {
        ...state,
        sortOption: action.payload
      };

    case DELETE_QUANTITY:
      return {
        ...state,
        isDeletedQuantity: action.payload
      };

    default:
      return state;
  }
};

export default rootReducer;
