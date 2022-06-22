import { ActionType } from './product';
import { Product, ProductType } from '../actions/typeActionProduct';

export interface ProductActionType {
  type:
    | ActionType.DATA_PRODUCT
    | ActionType.FILTER_PRODUCT_JAWEL
    | ActionType.FILTER_PRODUCT_MEN
    | ActionType.FILTER_PRODUCT_WOMEN;
  data: Product[];
}
