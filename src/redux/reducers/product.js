import data from '../../../product.json';
const dataProducts = data.products;
export default (state = [], action) => {
  switch (action.type) {
    case 'DATA_PRODUCT':
    case 'FILTER_PRODUCT_JAWEL':
    case 'FILTER_PRODUCT_MEN':
    case 'FILTER_PRODUCT_WOMEN':
      return action.data;
    default:
      return state;
  }
};
