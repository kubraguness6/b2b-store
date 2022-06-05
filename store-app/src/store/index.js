import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authStore } from "./authStore";
import {productStore} from "./productStore";

const reducer = combineReducers({
    productStore:productStore.reducer,
    authStore:authStore.reducer
  });
  
  const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
  
  export default store;
  