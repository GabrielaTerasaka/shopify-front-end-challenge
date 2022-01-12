import { createStore, combineReducers } from "redux";
import { nasaImages } from "./reducers";

import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const reducers = { nasaImages };
const rootReducer = combineReducers(reducers);

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
  createStore(persistedReducer, applyMiddleware(thunk));
