import { all } from 'redux-saga/effects';
import {
    openSideNavSagaWatcher,
    fetchAllCurrenciesSagaWatcher,
    } from './homePageSaga';

function* rootSaga(){
    yield all([
        openSideNavSagaWatcher(),
        fetchAllCurrenciesSagaWatcher(),
    ]);
}

export default rootSaga;