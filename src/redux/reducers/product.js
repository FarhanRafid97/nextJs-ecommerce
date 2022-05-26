export default (state = [], action) => {
  switch (action.type) {
    case 'DATA_PRODUCT':
      return action?.data;
    default:
      return state;
  }
};
