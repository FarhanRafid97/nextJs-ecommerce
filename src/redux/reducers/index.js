import { combineReducers } from 'redux';
import product from './product';

import chart from './chart';

const index = combineReducers({ product, chart });

export default index;
