import React, {Component} from 'react';
import  connect  from 'react-redux';
import  fetchBooks  from '../actions/bookActions';

// BookList component 
class BookList extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        const { page, itemsPerPage, filters } = this.props;
        this.props.fetchBooks(page, itemsPerPage, filters);
    }

    componentDidUpdate(prevProps) {
        if  (
            prevProps.page !== this.props.page ||
            prevProps.itemsPerPage !== this.props.itemsPerPage ||
            prevProps.filters !== this.props.filters
        ) {
            this.props.fetchBooks(this.props.page, this.props.itemsPerPage, this.props.filters);
        }
    }

    render() {
        const { books } = this.props;
        return (
            <div>
                <ul>
                    {books.map((book) => (
                        <li key={book.id}>{book.book_title}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    page: parseInt(ownProps.match.params.page, 10) || 1,
    itemsPerPage: 20,
    filters: [],
    books: state.books,
});

export default BookList;
