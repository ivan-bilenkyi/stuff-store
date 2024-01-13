import { configureStore } from '@reduxjs/toolkit';

import categoriesSlice from './categories/categoreisSlice';

export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
  },
  devTools: true,
});
