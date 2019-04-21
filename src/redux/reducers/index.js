import { combineReducers } from 'redux';
import homePageReducer from './homepageReducer';

const rootReducer = combineReducers({
    homePageReducer,
});

export default rootReducer;