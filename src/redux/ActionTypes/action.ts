import { ActionType } from './product';
import { Product, ProductType } from '../actions/typeActionProduct';
import { ChartTypeAction } from './chartType';
import { ChartProduct } from '../actions/typeChartProduct';

export interface ProductActionType {
  type: ActionType;
  data: Product[];
}

export interface RemoveChart {
  type: ChartTypeAction.REMOVE_CHART;
  data: number;
}
export interface ChartActionTypeAdd {
  type: ChartTypeAction.ADD_CHART;
  data: ChartProduct;
}

export type Action = ProductActionType | ChartActionTypeAdd | RemoveChart;

export type EnumType = Product[] | ChartProduct[];
