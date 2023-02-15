import {
  RECEIVE_ALL_BOOKS,
  REQUEST_ALL_BOOKS,
  ERROR_RECEIVE_ALL_BOOKS,
  SUCCESS_DELETE_BOOK,
  ERROR_DELETE_BOOK,
  REQUEST_DELETE_BOOK,
} from '../constants/actionTypes';

const initialState = {
  'books': [{
    "id": 1,
    "title": "The Lord of the Rings123",
    "author": "J.R.R. Tolkien",
    "category": "Fiction"
  },]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ERROR_RECEIVE_ALL_BOOKS: {
      return {
        ...state,
      };
    }

    case RECEIVE_ALL_BOOKS: {
      const books = action.payload;
      return {
        ...state,
        books: books || initialState.books,
      };
    }

    case REQUEST_ALL_BOOKS: {
      return {
        ...state,

      };
    }

    case SUCCESS_DELETE_BOOK: {
        return {
          ...state,
        }
    }

    case ERROR_DELETE_BOOK: {
      return {
        ...state,
      };
    }

    case REQUEST_DELETE_BOOK: {
      return {
        ...state,
      };
    }

    default: return state;
  }
}
