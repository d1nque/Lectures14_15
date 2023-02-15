import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { fetchBook, fetchAddBook, fetchUpdateBook} from '../actions/book';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import config from 'config/index'
import Button from 'components/Button';
import { useParams } from "react-router-dom";

const getClasses = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',

  },
  books:{
    border: '1px solid #f50057',
    padding: '4px',
    margin: '2px',
  }
}));

const Book = ({
}) => {
  const [state, setState] = useState({
    componentDidMount: false,
  });

  const [input, setInput] = useState('');

  let { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if(id != -1){
      dispatch(fetchBook(id));}
    setState(prevState => ({
      ...prevState,
      componentDidMount: true,
    }));
  }, []);
  const { BOOK_URL } = config;
  const classes = getClasses();
  const book = useSelector(({ reducer }) => reducer);

  return (
    <div className={classes.container}>
        <form>
          <input type="text" placeholder={book.book.title == undefined ? 'Book title' : book.book.title} onChange={(event) => setInput(event.target.value)}/>
          <br/>
          <Button type="button" onClick={() => {book.book.id == -1 ? dispatch(fetchAddBook(input)) : dispatch(fetchUpdateBook(book.book, input))}} href={`/books`} >Save</Button>
        </form>
        <Button href='/books'>Cancel</Button>
    </div>
  )
};

export default Book;


