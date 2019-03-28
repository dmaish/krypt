import { all } from 'redux-saga/effects';
import { openSideNavSaga, openSideNavSagaWatcher } from './homepageSaga';

function* rootSaga(){
    yield all([
        openSideNavSaga,
        openSideNavSagaWatcher,
    ]);
}

export default rootSaga;