import data from '../../../product.json';
import { Product } from '../actions/typeActionProduct';
import { Action } from '../ActionTypes/action';
import { ActionType } from '../ActionTypes/product';
const dataProducts = data.products;

export default (state: Product[] = [], action: Action) => {
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
