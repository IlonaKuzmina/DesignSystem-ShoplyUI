import { createSlice } from '@reduxjs/toolkit';
import { ProductData } from '../../data/productData';

export const productReducer = createSlice({
  name: 'product',
  initialState: {
    items: localStorage.getItem('products')
      ? (JSON.parse(localStorage.getItem('products') || '[]') as ProductData[]) : [],
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

    sortedByName(state, action) {
      const selectedOption = action.payload;

      if (selectedOption === 'asc') {
        state.items.sort((a: any, b: any) => a.name.localeCompare(b.name));
      } else if (selectedOption === 'desc') {
        state.items.sort((a: any, b: any) => b.name.localeCompare(a.name));
      }
      return state;
    },

    searchByName(state, action) {
      const searchValue = action.payload.toLowerCase();
      const filteredProducts = state.items.filter((prod) => prod.subcategory.toLowerCase().includes(searchValue));

      if (action.payload) {
        state.items = filteredProducts;
      }
      return state;
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
  sortedByName,
  searchByName,
} = productReducer.actions;

export default productReducer.reducer;
