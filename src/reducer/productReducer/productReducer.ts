import { createSlice } from '@reduxjs/toolkit';
import { ProductData } from '../../data/productData';

export const productReducer = createSlice({
  name: 'product',
  initialState: {
    items: localStorage.getItem('products')
      ? (JSON.parse(localStorage.getItem('products') || '[]') as ProductData[])
      : [],
    cartTotal: 0,
    cartTotalSum: 0,
    addToCartCounter: 1,
  },

  reducers: {
    addToCart(state, action) {
      state.items = state.items.map((i) => {
        if (i.id === action.payload) {
          i.inCart = true;
          i.count = state.addToCartCounter;
          state.addToCartCounter = 1;
        }
        return i;
      });
    },

    addCount(state, action) {
      state.items = state.items.map((i) => {
        if (i.id === action.payload) {
          state.addToCartCounter += 1;
        }
        return i;
      });
    },

    removeCount(state, action) {
      state.items = state.items.map((i) => {
        if (i.id === action.payload) {
          state.addToCartCounter -= 1;
        }
        return i;
      });
    },

    addCountInCart(state, action) {
      state.items = state.items.map((i) => {
        if (i.id === action.payload) {
          i.count += 1;
        }
        return i;
      });
    },

    removeCountInCart(state, action) {
      state.items = state.items.map((i) => {
        if (i.id === action.payload) {
          i.count -= 1;
        }
        return i;
      });
    },

    countAllInCart(state) {
      const newAr = state.items.map((i) => i.count);
      state.cartTotal = newAr.reduce((acc, items) => acc + items);
    },

    removeFromCart(state, action) {
      state.items = state.items.map((i) => {
        if (i.id === action.payload) {
          i.inCart = false;
        }
        return i;
      });
    },

    countTotalInCart(state) {
      const price = state.items.map((i) => {
        if (i.inCart === true) {
          return i.price * i.count;
        }
        return 0;
      });

      const priceTotal = price.reduce((acc, items) => acc + items);
      state.cartTotalSum = priceTotal;
    },
  },
});

export const {
  addToCart,
  removeCount,
  addCount,
  countAllInCart,
  removeFromCart,
  countTotalInCart,
  addCountInCart,
  removeCountInCart,
} = productReducer.actions;

export default productReducer.reducer;
