import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/product.slice";
import authSlice from "./slices/auth.slice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    auth: authSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
