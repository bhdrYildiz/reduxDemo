import { configureStore } from "@reduxjs/toolkit";
import { reducer as productsReducer } from "./products-store";
import { reducer as userReducer } from "./user-store";
import { reducer as basketReducer } from "./basket-store";

export function makeStore(preloadedState = {}) {
  return configureStore({
    reducer: {
      products: productsReducer,
      user: userReducer,
      basket: basketReducer,
    },
    preloadedState,
  });
}

export const store = makeStore();
