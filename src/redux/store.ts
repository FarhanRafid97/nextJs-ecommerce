import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import {
  useDispatch as useDispatchBase,
  useSelector as useSelectorBase,
} from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

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
