import {
  getJson,
  postJson,
  putJson,
} from 'requests';
import config from 'config/index';
import {
  RECEIVE_BOOK,
  ERROR_GET_BOOK,
  REQUEST_BOOK, 
  REQUEST_ADD_BOOK,
  SUCCESS_ADD_BOOK,
  ERROR_ADD_BOOK,
  REQUEST_UPDATE_BOOK,
  SUCCESS_UPDATE_BOOK,
  ERROR_UPDATE_BOOK,
} from '../constants/actionTypes';



const errorGetBook = () => ({
  type: ERROR_GET_BOOK,
});

const getBook = (id) => {
  const {
    BOOKS_URL,
  } = config;
  return getJson({
    url: `${BOOKS_URL}/${id.id}`,
  })
  .catch(() => {
    console.log("ploho1");
  });
};

const receiveBook = (book) => ({
  type: RECEIVE_BOOK,
  payload: book,
});

const requestBook = () => ({
  type: REQUEST_BOOK,
});

export const fetchBook = (id) => (dispatch) => {
    dispatch(requestBook());
    return getBook({
      dispatch, id
    }).then(book => dispatch(receiveBook(book)))
      .catch(() => dispatch(errorGetBook()));
};



const successAddBook = (book) => ({
  type: SUCCESS_ADD_BOOK,
  payload: book,
});

const requestAddBook = () => ({
  type: REQUEST_ADD_BOOK,
});

const errorAddBook = () => ({
  type: ERROR_ADD_BOOK,
});


const addBook = (title) => {
  console.log(title);
  const {
    BOOK_URL,
  } = config;
  return postJson({
    body:{
      title: `${title}`,
      author: 'zaglushka',
      category: 'Science'
    },
    url: `${BOOK_URL}add`,
  }).catch(() => {
    // TODO: this catch() is just a stub, which should be removed
  });
};

export const fetchAddBook = (title) => (dispatch) => {
  dispatch(requestAddBook());
  return addBook(title)
    .then(() => {dispatch(successAddBook());})
    .catch(() => dispatch(errorAddBook()))
};




const successUpdateBook = (book) => ({
  type: SUCCESS_UPDATE_BOOK,
  payload: book,
});

const requestUpdateBook = () => ({
  type: REQUEST_UPDATE_BOOK,
});

const errorUpdateBook = () => ({
  type: ERROR_UPDATE_BOOK,
});


const updateBook = (book, booktitle) => {
  const title = booktitle == '' ? book.title : booktitle;
  const {
    BOOK_URL,
  } = config;
  return putJson({
    body:{
      title: `${title}`,
      author: `${book.author}`,
      category: `${book.category}`,
    },
    url: `${BOOK_URL}update/${book.id}`,
  }).catch(() => {
    // TODO: this catch() is just a stub, which should be removed
  });
};

export const fetchUpdateBook = (book, title) => (dispatch) => {
  dispatch(requestUpdateBook());
  return updateBook(book, title)
    .then(() => {dispatch(successUpdateBook());})
    .catch(() => dispatch(errorUpdateBook()))
};

