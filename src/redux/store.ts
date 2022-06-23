import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './reducers';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

const middleware = [thunk];

export const store = createStore(
  rootReducer,
  compose(applyMiddleware(...middleware))
);
export const reducersConfig = configureStore({ reducer: rootReducer });
const makeStore = () =>
  createStore(rootReducer, compose(applyMiddleware(...middleware)));
//const store = createStore(rootReducer, compose(applyMiddleware(...middleware)))

export type RootState = ReturnType<typeof reducersConfig.getState>;
export type AppDispatch = typeof store.dispatch;
export const wrapper = createWrapper(makeStore);

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
