import { combineReducers } from 'redux';
import chart from './chart';
import product from './product';

const index = combineReducers({ product, chart });

export default index;
export type State = ReturnType<typeof index>;
