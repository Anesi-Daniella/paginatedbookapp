import { createReducer } from '@reduxjs/toolkit';
import { FETCH_BOOKS } from '../actions/types';

const initialState = {
    books: [],
    count: 0,
};

const bookReducer = createReducer(initialState,  {
    [FETCH_BOOKS]: (state, action) => {
        state.books = action.payload.books;
        state.count = action.payload.count;
    },
});

export default bookReducer;