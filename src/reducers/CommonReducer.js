import {
    DEFAULT_TIMER,
    DEFAULT_AMB_TIMER,
    ROTATION_TYPE
} from './types';

let INIT_STATE = {

    default_timer: 5,
    default_amb_timer: 10,
    rotation_type:1,
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case DEFAULT_TIMER:
            return { ...state, default_timer: action.payload }
        case DEFAULT_AMB_TIMER:
            return { ...state, default_amb_timer: action.payload }
        case ROTATION_TYPE:
            return { ...state, rotation_type: action.payload }

    }
    return state;
};
