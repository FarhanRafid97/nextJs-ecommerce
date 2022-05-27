import * as api from '../../api';

export const getDataProduk = (id) => async (dispatch) => {
  try {
    const { data } = await api.getProuct();
    const dataById = data.filter((data) => data.id <= id);
    dispatch({
      type: 'DATA_PRODUCT',
      data: { dataById, jmlData: data.length },
    });
  } catch (error) {
    console.log(error.message);
  }
};
export const detailPorduct = (id) => async (dispatch) => {
  try {
    const { data } = await api.getProuct();
    const detailData = data.filter((data) => Number(data.id) === Number(id));
    dispatch({
      type: 'DETAIL_PRODUCT',
      data: detailData,
    });
  } catch (error) {
    console.log(error.message);
  }
};
