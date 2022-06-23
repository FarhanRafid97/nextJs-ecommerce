import { ActionType } from './product';
import { Product, ProductType } from '../actions/typeActionProduct';
import { ChartTypeAction } from './chartType';
import { ChartProduct } from '../actions/typeChartProduct';

export interface ProductActionType {
  type: ActionType;
  data: Product[];
}

export interface ChartActionType {
  index?: number;
  type: ChartTypeAction;
  data?: ChartProduct;
}
