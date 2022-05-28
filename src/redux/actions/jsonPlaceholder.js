export const getDataJson = (limit) => async (dispatch) => {
  try {
    const { data } = await api.getJson(limit);
    // const dataById = data.filter((data) => data.id <= id);
    dispatch({
      type: 'DATA_JSON',
      data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
