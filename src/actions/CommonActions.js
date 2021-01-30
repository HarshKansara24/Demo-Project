import {
    DEFAULT_TIMER, DEFAULT_AMB_TIMER, ROTATION_TYPE,

} from "../reducers/types";
import {store} from "../App";

export const storedefaulttimer = (value) => {
   
    store.dispatch({
        type: DEFAULT_TIMER,
        payload: value,
    });
};


export const storeambdefaulttimer = (value) => {
   
    store.dispatch({
        type: DEFAULT_AMB_TIMER,
        payload: value,
    });
};
export const storerotationtype = (value) => {
   
    store.dispatch({
        type: ROTATION_TYPE,
        payload: value,
    });
};
