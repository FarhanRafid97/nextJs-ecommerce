import { ChartActionType, ProductActionType } from '../ActionTypes/action';

export type DispatchType = {
  dispatch: ChartActionType | ProductActionType;
};
