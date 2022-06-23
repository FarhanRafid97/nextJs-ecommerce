import { AnyAction, PayloadAction } from '@reduxjs/toolkit';
import { ChartProduct } from '../actions/typeChartProduct';
import { ChartActionType } from '../ActionTypes/action';
import { ChartTypeAction } from '../ActionTypes/chartType';

export default (
  state: ChartProduct[] | [] = [],
  action: PayloadAction<ChartActionType> | AnyAction | any
) => {
  switch (action.type) {
    case ChartTypeAction.ADD_CHART:
      const isDuplicate = state.filter(
        (data) =>
          data.product.id === action.payload.data.product.id &&
          data.size === action.payload.data.size
      );

      const duplicateData = state.map((data) =>
        data.product.id === action?.payload.data.product.id &&
        data.size === action.payload.data.size
          ? {
              ...action.payload,
              jumlah: action.payload.data.jumlah + data.jumlah,
            }
          : data
      );
      return isDuplicate.length !== 0
        ? duplicateData
        : (state = [...state, action?.payload.data]);

    case 'REMOVE_CHART':
      return state.filter((data, index) => index !== action.payload.index);
    case 'ADD_TOTAL_CART':
      console.log(action.payload);
      return state.map((data, index) => {
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

    default:
      return state;
  }
};
