import { 
        RETRACT_SLIDER_MENU,
        FETCH_ALL_CURRENCIES,
        FETCH_ALL_CURRENCIES_SUCCESS
        } from './../constants/actionTypes';

export const retractSlider = () => ({
    type: RETRACT_SLIDER_MENU
});

export const fetchAllCurrenciesAction = () => ({
    type: FETCH_ALL_CURRENCIES
});

export const fetchAllCurrenciesSuccessAction = (allCurrencies) => ({
    type: FETCH_ALL_CURRENCIES_SUCCESS,
    allCurrencies,
});