import bookReducer from "./bookReducer";
import { fetchBooks } from "../actions/bookActions";

describe('bookReducer', () => {
    it('handles FETCH_BOOKS action', () => {
        const initialState = {
            books: [],
            count: 0,
        };

        const books =[{ id: 1, book_title: 'Book 1' }];
        const newState = bookReducer(initialState, fetchBooks({ books, count: books.length }));

        expect(newState.books).toEqual(books);
        expect(newState.books).toEqual(books.length);
        
    });
});