/* eslint-disable require-yield */
import { takeLatest, call, put } from 'redux-saga/effects';
import { 
    RETRACT_SLIDER_MENU, 
    FETCH_ALL_CURRENCIES
    } from './../constants/actionTypes';
import homePageService from './../../services/homePageService';
import { 
    retractSlider,
    fetchAllCurrenciesSuccessAction,
    } from './../actionCreator/homePageActions';

export function* openSideNavSagaWatcher(){
    takeLatest(RETRACT_SLIDER_MENU, openSideNavSaga);
}
export function* openSideNavSaga(){
    yield put(RETRACT_SLIDER_MENU, retractSlider());
}

export function* fetchAllCurrenciesSagaWatcher(){
    yield takeLatest(FETCH_ALL_CURRENCIES, fetchAllCurrenciesSaga)
}
export function* fetchAllCurrenciesSaga(){
    try{
        const service = homePageService.getAllcurrencies;
        const allCurrencies = yield call(service);
        console.log('THE CURRENCY', allCurrencies);
        yield put(fetchAllCurrenciesSuccessAction(allCurrencies)); 
    } catch {
        console.log('THE CURRENCY FETCHING FAILED');
    }
}