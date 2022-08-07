import { createSlice } from '@reduxjs/toolkit';
import { ChartProduct } from '../ActionTypes/typeChartProduct';

interface CounterState {
  value: ChartProduct[];
}

const initialState: CounterState = {
  value: [],
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    addChart(state, action) {
      const isDuplicate = state.value.filter(
        (data) =>
          data.product.id === action.payload.product.id &&
          data.size === action.payload.size
      );

      const duplicateData = state.value.map((data) =>
        data.product.id === action?.payload.product.id &&
        data.size === action.payload.size
          ? {
              ...action.payload,
              jumlah: action.payload.jumlah + data.jumlah,
            }
          : data
      );
      state.value =
        isDuplicate.length !== 0
          ? duplicateData
          : (state.value = [...state.value, action.payload]);
    },
    removeChartItem(state, action) {
      console.log(action.payload.index);
      state.value = state.value.filter(
        (data, index) => index !== action.payload.index
      );
    },
    addTotalChart(state, action) {
      state.value = state.value.map((data, index) => {
        if (index === action.payload.index) {
          return action.payload.params === 'add'
            ? {
                size: data.size,
                jumlah: data.jumlah + 1,
                product: data.product,
              }
            : {
                size: data.size,
                jumlah: data.jumlah <= 0 ? 0 : data.jumlah - 1,
                product: data.product,
              };
        } else {
          return data;
        }
      });
    },
  },
});

export const { addChart, removeChartItem, addTotalChart } = chartSlice.actions;
export default chartSlice.reducer;
