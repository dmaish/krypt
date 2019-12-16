import { all } from 'redux-saga/effects';
import {
    openSideNavSagaWatcher,
    fetchAllCurrenciesSagaWatcher,
    } from './homepageSaga';

function* rootSaga(){
    yield all([
        openSideNavSagaWatcher(),
        fetchAllCurrenciesSagaWatcher(),
    ]);
}

export default rootSaga;