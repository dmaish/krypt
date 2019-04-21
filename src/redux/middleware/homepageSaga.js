/* eslint-disable require-yield */
import { put, takeLatest } from 'redux-saga/effects';
import { RETRACT_SLIDER_MENU } from './../constants/actionTypes';
import { retractSlider } from './../actionCreator/homePageActions';

export function* openSideNavSagaWatcher(){
    takeLatest(RETRACT_SLIDER_MENU, openSideNavSaga);
}
export function* openSideNavSaga(){
    yield put(RETRACT_SLIDER_MENU, retractSlider());
}

export function* closeSideNavSagaWatcher(){

}
export function* closeSideNavSaga(){

}