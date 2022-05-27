import * as api from '../../api';

export const getDataProduk = (limit) => async (dispatch) => {
  try {
    const { data } = await api.getProduct(limit);
    // const dataById = data.filter((data) => data.id <= id);
    dispatch({
      type: 'DATA_PRODUCT',
      data: { data, jmlData: data.length },
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const detailPorduct = (id) => async (dispatch) => {
  try {
    const { data } = await api.getDetailProuct(id);

    dispatch({
      type: 'DETAIL_PRODUCT',
      data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
