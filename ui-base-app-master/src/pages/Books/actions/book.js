import {
  getJson,
  deleteJson,
} from 'requests';
import config from 'config/index';
import {
  RECEIVE_ALL_BOOKS,
  SUCCESS_DELETE_BOOK,
  REQUEST_ALL_BOOKS,
  REQUEST_DELETE_BOOK,
  ERROR_RECEIVE_ALL_BOOKS,
  ERROR_DELETE_BOOK
} from '../constants/actionTypes';

const errorGetAllBooks = () => ({
  type: ERROR_RECEIVE_ALL_BOOKS,
});


const getAllBooks = () => {
  const {
    BOOKS_URL,
  } = config;
  return getJson({
    url: `${BOOKS_URL}`,
  })
  .catch(() => {
    console.log("ploho1");
  });
};

const receiveAllBooks = (books) => ({
  type: RECEIVE_ALL_BOOKS,
  payload: books,
});

const requestAllBooks = () => ({
  type: REQUEST_ALL_BOOKS,
});

export const fetchBooks = () => (dispatch) => {
    dispatch(requestAllBooks());
    return getAllBooks({
      dispatch,
    }).then(books => dispatch(receiveAllBooks(books)))
      .catch(() => dispatch(errorGetAllBooks()));
};


const errorDeleteBook = () => ({
  type: ERROR_DELETE_BOOK,
});


const successDeleteBook = (books) => ({
  type: SUCCESS_DELETE_BOOK,
  payload: books,
});

const requestDeleteBook = () => ({
  type: REQUEST_DELETE_BOOK,
});

export const deleteBook = (id) => {
  const {
    BOOKS_URL,
  } = config;
  return deleteJson({
    url: `${BOOKS_URL}/remove/${id.id}`,
  })
  .catch(() => {
    //
  });
};

export const fetchDeleteBook = (id) => (dispatch) => {
    dispatch(requestDeleteBook());
    return deleteBook({
      dispatch, id
    }).then(book => dispatch(successDeleteBook(book)))
      .then(() => dispatch(fetchBooks()))
      .catch(() => dispatch(errorDeleteBook()));
};

