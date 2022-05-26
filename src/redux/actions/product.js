import * as api from '../../api';

export const getDataProduk = () => async (dispatch) => {
  try {
    const { data } = await api.getProuct();
    dispatch({ type: 'DATA_PRODUCT', data });
  } catch (error) {
    console.log(error.message);
  }
};
