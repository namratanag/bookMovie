import {combineReducers} from 'redux';
import allBooks from './books';
import {reducer as formReducer } from 'redux-form';
import registerReducer from './otherReducer';
import bookReducer from './bookReducer';

const allReducer = combineReducers ({
    books:allBooks,
    form:formReducer,
    other: registerReducer,
    getBook:bookReducer
    
});

export default allReducer;