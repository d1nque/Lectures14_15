import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Link from 'components/Link';
import Typography from 'components/Typography';
import { fetchBooks, fetchDeleteBook} from '../actions/book';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import config from 'config/index'
import Button from 'components/Button';
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

const Books = ({
}) => {
  const [state, setState] = useState({
    componentDidMount: false,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
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
    <br/>
     <Button variant="outlined" color="secondary" href={'book/'+-1}>Create</Button>
    <br/>
     {book.books.map((book) => (
      <div class={classes.books}>
        <Link
           href= {BOOK_URL+book.id}
        >
          <Typography>
            { book.title }
          </Typography>
        </Link>
          <Button variant="outlined" key={book.id} onClick={() => dispatch(fetchDeleteBook(book.id))}>Delete</Button>
          <Button variant="outlined" href={'book/'+book.id}>Edit</Button>
        </div>
      ))}
    </div>
  )
};

export default Books;
