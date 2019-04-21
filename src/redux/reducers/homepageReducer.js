import {
    RETRACT_SLIDER_MENU,
    DETRACT_SLIDER_MENU,
    FETCH_ALL_CURRENCIES_SUCCESS,
        } from './../constants/actionTypes';

const initialState = {
            isFetchingFromApi: true,
            allCurrencies: [],
}

const homePage = ( state = initialState, action ) => {
    switch(action.type){
        case RETRACT_SLIDER_MENU:
            return { ...state, shouldOpen: true }

        case DETRACT_SLIDER_MENU:
            return { ...state, shouldOpen: false }

        case FETCH_ALL_CURRENCIES_SUCCESS:
            return{ ...state, allCurrencies: [action.allCurrencies.data], isFetchingFromApi: false }

        default:
            return state;
    }
}
export default homePage;