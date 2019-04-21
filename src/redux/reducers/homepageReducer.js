import {RETRACT_SLIDER_MENU, DETRACT_SLIDER_MENU} from './../constants/actionTypes';

const initialState = {
        shouldOpen: false,
}

const sideBarNavOpenClose = ( state = initialState, action ) => {
    switch(action.type){
        case RETRACT_SLIDER_MENU:
            return {
                ...state,
                        shouldOpen: true, 
            }
        case DETRACT_SLIDER_MENU:
            return {
                ...state,
                    shouldOpen: false,
            }
        default:
            return state;
    }
}
export default sideBarNavOpenClose;