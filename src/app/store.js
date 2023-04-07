import { configureStore } from '@reduxjs/toolkit';
import searchbarSlice from '../features/searchBar/searchbarSlice'
import subRedditsSlice from '../features/subreddits/subRedditsSlice';
import postsSlice from '../features/posts/postsSlice';
import postSlice from '../features/Post/postSlice';

export const store = configureStore({
  reducer: {
    searchbar: searchbarSlice,
    subreddits: subRedditsSlice,
    posts: postsSlice,
    post: postSlice
  }
});
