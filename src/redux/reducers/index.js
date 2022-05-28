import { combineReducers } from 'redux';
import product from './product';
import json from './json';

const index = combineReducers({ product, json });

export default index;
