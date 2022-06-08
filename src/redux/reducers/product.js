import data from '../../../product.json';
export default (state = [], action) => {
  switch (action.type) {
    case 'DATA_PRODUCT':
    case 'FILTER_PRODUCT_JAWEL':
    case 'FILTER_PRODUCT_MEN':
    case 'FILTER_PRODUCT_WOMEN':
      console.log(action.data);
      return action.data;
    default:
      return state;
  }
};
