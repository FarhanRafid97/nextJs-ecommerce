import data from '../../../product.json';
import { Dispatch } from 'redux';
import { Product, ProductType } from './typeActionProduct';
import { ProductActionType } from '../ActionTypes/action';
import { ActionType } from '../ActionTypes/product';

export const getDataProduk = () => (dispatch: Dispatch<ProductActionType>) => {
  console.log(typeof data.products);
  dispatch({
    type: ActionType.DATA_PRODUCT,
    data: data.products,
  });
};

export const getWomenCategory =
  () => (dispatch: Dispatch<ProductActionType>) => {
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

export const getMenCategory = () => (dispatch: Dispatch<ProductActionType>) => {
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

export const getJaweleryCategory =
  () => (dispatch: Dispatch<ProductActionType>) => {
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
export const addToChart = (product: ProductType) => (dispatch: Dispatch) => {
  try {
    dispatch({
      type: 'ADD_CHART',
      data: product,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const getChartData = () => (dispatch: Dispatch) => {
  try {
    dispatch({
      type: 'FETCH_DATA',
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
export const removeChartData = (index: number) => (dispatch: Dispatch) => {
  try {
    dispatch({
      type: 'REMOVE_CHART',
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
        payload: { index, params },
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };
