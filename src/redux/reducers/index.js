import { combineReducers } from 'redux';
import homePage from './homepageReducer';

const rootReducer = combineReducers({
    homePage,
});

export default rootReducer;