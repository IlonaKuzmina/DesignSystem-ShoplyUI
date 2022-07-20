import { createSlice } from '@reduxjs/toolkit';
import productsData, { ProductData } from '../../data/productData';

export const productReducer = createSlice({
  name: 'product',
  initialState: {
    items: <ProductData[]>productsData,
    cartTotal: 0,
    cartTotalSum: 0,
  },

  reducers: {
    addToCart(state, action) {
      state.items = state.items.map((i) => {
        if (i.id === action.payload) {
          i.inCart = true;
        }
        return i;
      });
    },
  },
});

export const { addToCart } = productReducer.actions;

export default productReducer.reducer;
