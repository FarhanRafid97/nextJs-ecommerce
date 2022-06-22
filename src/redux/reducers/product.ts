import data from '../../../product.json';
import { Product, ProductType } from '../actions/typeActionProduct';
import { ProductActionType } from '../ActionTypes/action';
import { ActionType } from '../ActionTypes/product';
const dataProducts = data.products;
export default (state: Product[] = [], action: ProductActionType) => {
  switch (action.type) {
    case ActionType.DATA_PRODUCT:
    case ActionType.FILTER_PRODUCT_JAWEL:
    case ActionType.FILTER_PRODUCT_MEN:
    case ActionType.FILTER_PRODUCT_WOMEN:
      return action.data;
    default:
      return state;
  }
};
