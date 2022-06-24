import { ChartProduct } from '../actions/typeChartProduct';
import { Action } from '../ActionTypes/action';
import { ChartTypeAction } from '../ActionTypes/chartType';

export default (state: ChartProduct[] = [], action: Action) => {
  switch (action.type) {
    case ChartTypeAction.ADD_CHART:
      const isDuplicate = state.filter(
        (data) =>
          data.product.id === action.data.product.id &&
          data.size === action.data.size
      );

      const duplicateData = state.map((data) =>
        data.product.id === action?.data.product.id &&
        data.size === action.data.size
          ? {
              ...action,
              jumlah: action.data.jumlah + data.jumlah,
            }
          : data
      );
      return isDuplicate.length !== 0
        ? duplicateData
        : (state = [...state, action.data]);

    // case 'REMOVE_CHART':
    //   return state.filter((data, index) => index !== action.index);
    // case 'ADD_TOTAL_CART':
    //   console.log(action);
    //   return state.map((data, index) => {
    //     if (index === action.index) {
    //       return action.data.params === 'add'
    //         ? {
    //             size: data.size,
    //             jumlah: data.jumlah + 1,
    //             product: data.product,
    //           }
    //         : {
    //             size: data.size,
    //             jumlah: data.jumlah <= 0 ? 0 : data.jumlah - 1,
    //             product: data.product,
    //           };
    //     } else {
    //       return data;
    //     }
    //   });

    default:
      return state;
  }
};
