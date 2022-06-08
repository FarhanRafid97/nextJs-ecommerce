import * as api from '../../api';
import data from '../../../product.json';

export const getDataProduk = () => (dispatch) => {
  const dataProducts = data.products;
  dispatch({
    type: 'DATA_PRODUCT',
    data: dataProducts,
  });
};

export const getWomenCategory = () => (dispatch) => {
  try {
    const dataProducts = data.products;
    const filterProduct = dataProducts.filter(
      (data) => data.category === "women's clothing"
    );
    dispatch({
      type: 'FILTER_PRODUCT_WOMEN',
      data: filterProduct,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getMenCategory = () => (dispatch) => {
  try {
    const dataProducts = data.products;
    const filterProduct = dataProducts.filter(
      (data) => data.category === "men's clothing"
    );
    dispatch({
      type: 'FILTER_PRODUCT_MEN',
      data: filterProduct,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getJaweleryCategory = () => (dispatch) => {
  try {
    const dataProducts = data.products;
    const filterProduct = dataProducts.filter(
      (data) => data.category === 'jewelery'
    );
    dispatch({
      type: 'FILTER_PRODUCT_JAWEL',
      data: filterProduct,
    });
  } catch (error) {
    console.log(error);
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
export const addToChart = (product) => (dispatch) => {
  try {
    dispatch({
      type: 'ADD_CHART',
      data: product,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getChartData = () => (dispatch) => {
  try {
    dispatch({
      type: 'FETCH_DATA',
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const removeChartData = (index) => (dispatch) => {
  try {
    dispatch({
      type: 'REMOVE_CHART',
      index,
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const addTotal = (index, params) => (dispatch) => {
  try {
    dispatch({
      type: 'ADD_TOTAL_CART',
      payload: { index, params },
    });
  } catch (error) {
    console.log(error.message);
  }
};
