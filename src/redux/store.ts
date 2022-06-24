import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware, compose } from 'redux';

import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from 'react-redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

const middleware = [thunk];

export const store = configureStore({
  reducer,
});

export const store2 = createStore(
  reducer,
  compose(applyMiddleware(...middleware))
);
const makeStore = () =>
  createStore(reducer, compose(applyMiddleware(...middleware)));

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useDispatchBase<AppDispatch>();

export const useSelector = <TSelected = unknown>(
  selector: (state: RootState) => TSelected
): TSelected => useSelectorBase<RootState, TSelected>(selector);

export const wrapper = createWrapper(makeStore as any);
