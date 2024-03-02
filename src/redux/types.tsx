const SET_PRODUCTS = "SET_PRODUCTS";
const OPEN_DRAWER = "OPEN_DRAWER";
const ADD_TO_CART = "ADD_TO_CART";
const DELETED_CART = "DELETED_CART";
const SET_SEARCH_TERM = "SET_SEARCH_TERM";
const SET_SORT_OPTION = "SET_SORT_OPTION";
const DELETE_QUANTITY = "DELETE_QUANTITY";

export {
    SET_PRODUCTS,
    OPEN_DRAWER,
    ADD_TO_CART,
    DELETED_CART,
    SET_SEARCH_TERM,
    SET_SORT_OPTION,
    DELETE_QUANTITY,
};

export interface Product {
    id: number;
    name: string;
    description: string;
    validityDate: string;
    cost: number;
}

export interface ProductShopping extends Product {
    quantity: number;
}
