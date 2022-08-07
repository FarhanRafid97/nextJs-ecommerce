import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../ActionTypes/typeActionProduct';

import data from '../../../product.json';

export enum CategoryType {
  MEN = "men's clothing",
  WOMEN = "women's clothing",
  ACCESSORIES = 'jewelery',
}

interface CounterState {
  value: Product[];
}

const initialState: CounterState = {
  value: data.products,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    allProduct(state) {
      state.value = data.products;
    },
    womenProduct(state, action) {
      if (action.payload === CategoryType.WOMEN) {
        state.value = data.products.filter(
          (data) => data.category === CategoryType.WOMEN
        );
      }
    },
    menProduct(state, action) {
      if (action.payload === CategoryType.MEN) {
        state.value = data.products.filter(
          (data) => data.category === CategoryType.MEN
        );
      }
    },
    jawelryProduct(state, action) {
      if (action.payload === CategoryType.ACCESSORIES) {
        state.value = data.products.filter(
          (data) => data.category === CategoryType.ACCESSORIES
        );
      }
    },
  },
});

export const { jawelryProduct, allProduct, menProduct, womenProduct } =
  productSlice.actions;
export default productSlice.reducer;
