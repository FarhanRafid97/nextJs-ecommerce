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
              ...action.data,
              jumlah: action.data.jumlah + data.jumlah,
            }
          : data
      );
      return isDuplicate.length !== 0
        ? duplicateData
        : (state = [...state, action.data]);

    case 'REMOVE_CHART':
      return state.filter((data, index) => index !== action.index);
    case 'ADD_TOTAL_CART':
      console.log(action.payload);
      return state.map((data, index) => {
        if (index === action.payload.index) {
          return action.payload.params === 'add'
            ? {
                size: data.size,
                jumlah: data.jumlah + 1,
                product: data.product,
              }
            : {
                size: data.size,
                jumlah: data.jumlah <= 0 ? 0 : data.jumlah - 1,
                product: data.product,
              };
        } else {
          return data;
        }
      });

    default:
      return state;
  }
};
