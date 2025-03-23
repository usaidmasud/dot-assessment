import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Product, ProductCart } from "../../../models/Product";

export interface ProductState {
  favorites: Product[];
  productSelected: Product | null;
  carts: ProductCart[];
}

const initialState: ProductState = {
  favorites: [],
  carts: [],
  productSelected: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toggleAddToFavorite: (state, action: PayloadAction<Product>) => {
      const find = state.favorites.find((f) => f.id === action.payload.id);
      if (!find) {
        state.favorites.push(action.payload);
      } else {
        state.favorites = state.favorites.filter(
          (f) => f.id !== action.payload.id
        );
      }
    },

    toggleAddToCart: (state, action: PayloadAction<Product>) => {
      const existingCartProduct = state.carts.find(
        (f) => f.product.id === action.payload.id
      );

      if (existingCartProduct) {
        existingCartProduct.count += 1;
      } else {
        state.carts.push({
          count: 1,
          product: action.payload,
        });
      }
    },
    toggleIncreaseCart: (state, action: PayloadAction<string>) => {
      const existingCartProduct = state.carts.find(
        (f) => f.product.id === action.payload
      );

      if (existingCartProduct) {
        existingCartProduct.count += 1;
      }
    },
    toggleDeccreaseCart: (state, action: PayloadAction<string>) => {
      const existingCartProduct = state.carts.find(
        (f) => f.product.id === action.payload
      );

      if (existingCartProduct) {
        existingCartProduct.count -= 1;
      }
    },
    toggleRemoveFromCart: (state, action: PayloadAction<string>) => {
      state.carts = state.carts.filter((f) => f.product.id !== action.payload);
      console.log(state.carts);
    },
    toggleSetProductSelected: (
      state,
      action: PayloadAction<Product | null>
    ) => {
      state.productSelected = action.payload;
    },
  },
});

export const {
  toggleAddToFavorite,
  toggleAddToCart,
  toggleRemoveFromCart,
  toggleIncreaseCart,
  toggleDeccreaseCart,
  toggleSetProductSelected,
} = productSlice.actions;

export default productSlice.reducer;
