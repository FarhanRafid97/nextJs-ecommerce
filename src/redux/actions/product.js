import * as api from '../../api';

// export const getDataProduk = (limit) => async (dispatch) => {
//   try {
//     const { data } = await api.getProduct(limit);

//     dispatch({
//       type: 'DATA_PRODUCT',
//       data: { data, jmlData: data.length },
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
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
