import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comment/commentsSlice';
import { partnersReducer } from '../features/partner/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import logger from 'redux-logger';

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    comments: commentsReducer,
    promotions: promotionsReducer,
    partners: partnersReducer,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
