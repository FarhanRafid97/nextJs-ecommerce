import data from '../../../product.json';
import { Dispatch } from 'redux';
import { AnyAction } from 'redux';
import { Action, ProductActionType } from '../ActionTypes/action';
import { ActionType } from '../ActionTypes/product';
import { ChartTypeAction } from '../ActionTypes/chartType';
import { ChartProduct } from './typeChartProduct';
import { Product } from './typeActionProduct';

export const getDataProduk = () => (dispatch: Dispatch<Action>) => {
  console.log(typeof data.products);
  dispatch({
    type: ActionType.DATA_PRODUCT,
    data: data.products,
  });
};

export const getWomenCategory = () => (dispatch: Dispatch<Action>) => {
  try {
    const filterProduct = data.products.filter(
      (data) => data.category === "women's clothing"
    );
    dispatch({
      type: ActionType.FILTER_PRODUCT_WOMEN,
      data: filterProduct,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMenCategory = () => (dispatch: Dispatch<Action>) => {
  try {
    const filterProduct = data.products.filter(
      (data) => data.category === "men's clothing"
    );
    dispatch({
      type: ActionType.FILTER_PRODUCT_MEN,
      data: filterProduct,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const getJaweleryCategory = () => (dispatch: Dispatch<Action>) => {
  try {
    const filterProduct = data.products.filter(
      (data) => data.category === 'jewelery'
    );
    dispatch({
      type: ActionType.FILTER_PRODUCT_JAWEL,
      data: filterProduct,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
// export const detailPorduct = (id) => async (dispatch) => {
//   try {
//     const { data } = await api.getDetailProuct(id);

//     dispatch({
//       type: 'DETAIL_PRODUCT',
//       data,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
export const addToChart =
  (product: ChartProduct) => (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ChartTypeAction.ADD_CHART,
        data: product,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

// export const getChartData = () => (dispatch: Dispatch<ChartActionType>) => {
//   try {
//     dispatch({
//       type: ChartTypeAction.ADD_CHART,
//     });
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.log(error.message);
//     }
//   }
// };
export const removeChartData =
  (index: number) => (dispatch: Dispatch<Action>) => {
    try {
      dispatch({
        type: ChartTypeAction.REMOVE_CHART,
        index,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };
export const addTotal =
  (index: number, params: string) => (dispatch: Dispatch) => {
    try {
      dispatch({
        type: 'ADD_TOTAL_CART',
        data: { index, params },
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };
