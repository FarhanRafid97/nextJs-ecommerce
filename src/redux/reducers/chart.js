export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_CHART':
      const isDuplicate = state.filter(
        (data) =>
          data.product.id === action.data.product.id &&
          data.size === action.data.size
      );

      const duplicateData = state.map((data) =>
        data.product.id === action.data.product.id &&
        data.size === action.data.size
          ? {
              size: action.data.size,
              jumlah: action.data.jumlah + data.jumlah,
              product: action.data.product,
            }
          : data
      );
      return isDuplicate.length !== 0
        ? duplicateData
        : (state = [...state, action.data]);
    case 'REMOVE_CHART':
      return state.filter((data, index) => index !== action.index);

    default:
      return state;
  }
};
