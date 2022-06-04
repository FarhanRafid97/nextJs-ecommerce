import { combineReducers } from 'redux';
import product from './product';
import json from './json';
import chart from './chart';

const index = combineReducers({ product, json, chart });

export default index;
