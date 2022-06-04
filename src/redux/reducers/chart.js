export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHART':
      const isDuplicate = state.filter(
        (data) => data.product.id === action.data.product.id
      );
      const duplicateData = state.map((data) =>
        data.product.id === action.data.product.id
          ? {
              jumlah: action.data.jumlah + data.jumlah,
              product: action.data.product,
            }
          : data
      );
      return isDuplicate.length !== 0
        ? duplicateData
        : (state = [...state, action.data]);
    case 'REMOVE_CHART':
      return state.filter((data) => data.product.id !== action.id);

    default:
      return state;
  }
};
