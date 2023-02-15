
import {
  ERROR_GET_BOOK,
  ERROR_ADD_BOOK,
  ERROR_UPDATE_BOOK,
  REQUEST_UPDATE_BOOK,
  REQUEST_BOOK, 
  REQUEST_ADD_BOOK,
  RECEIVE_BOOK,
  SUCCESS_UPDATE_BOOK,
  SUCCESS_ADD_BOOK,
} from '../constants/actionTypes';

const initialState = {
  'book': {
    "id": -1,
    "title": "0",
    "author": "0",
    "category": "0"
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    
    case RECEIVE_BOOK: {
      const book = action.payload;
      return {
        ...state,
        book: book || initialState.book,
      };
    }

    case REQUEST_BOOK: {
      return {
        ...state,
      };
    }
    case RECEIVE_BOOK: {
      return {
        ...state,
      };
    }
    case ERROR_GET_BOOK: {
      return {
        ...state,
      };
    }

    case SUCCESS_ADD_BOOK: {
      return {
        ...state,
      };
    }

    case REQUEST_ADD_BOOK: {
      return {
        ...state,

      };
    }

    case ERROR_ADD_BOOK: {
      return {
        ...state,
      };
    }


    default: return state;
  }
}
