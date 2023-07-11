import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import { BookList } from './BookList';
import bookReducer from '../reducers/bookReducer';


describe('BookList' , () => {
    it('renders a list of books', () => {
        const store = createStore(bookReducer);
        const books = [
            { id: 1, book_title: 'Book 1' },
            { id: 2, book_title: 'Book 2' },
            { id: 3, book_title: 'Book 3' },
        ];
        store.dispatch({ type: 'FETCH_BOOKS', payload: { books, count: books.length }  });

        const { getByText } = render(
            <Provider store={store}>
                <BookList/>
            </Provider>
        );

        expect(getByText('Book 1 ')).toBeInTheDocument();
        expect(getByText('Book 2 ')).toBeInTheDocument();
        expect(getByText('Book 3 ')).toBeInTheDocument();
    });
});