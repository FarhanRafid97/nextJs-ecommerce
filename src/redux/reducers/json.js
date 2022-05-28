export default (state = [], action) => {
  switch (action.type) {
    case 'DATA_JSON':
      return action?.data;
    default:
      return state;
  }
};
