import { ActionType } from './product';
import { Product, ProductType } from '../actions/typeActionProduct';
import { ChartTypeAction } from './chartType';
import { ChartProduct } from '../actions/typeChartProduct';

export interface ProductActionType {
  type: ActionType;
  data: Product[];
}

// export interface RemoveChart {
//   type: ChartTypeAction.REMOVE_CHART;
//   data: number;
// }
export interface ChartActionTypeAdd {
  type: ChartTypeAction.ADD_CHART | ChartTypeAction.ADD_TOTAL_CART;
  data: ChartProduct;
  index?: number;
}
export interface ChartActionTypeDelete {
  type: ChartTypeAction.REMOVE_CHART;
  index?: number;
}

export type Action =
  | ProductActionType
  | ChartActionTypeAdd
  | ChartActionTypeDelete;

export type EnumType = Product[] | ChartProduct[];
