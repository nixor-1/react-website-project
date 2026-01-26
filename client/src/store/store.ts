import { configureStore } from "@reduxjs/toolkit";
import blogPostsReducer from './blogPosts/blogPostsSlice.ts'

export const store = configureStore({
  reducer: {
    blogPosts: blogPostsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
