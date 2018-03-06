import { CHOOSE_AIRPORT } from '../constants';
import update from 'react-addons-update';

const initialState = {
    origin: '',
    destination: '',
};

const route = (state = initialState, action) => {
    switch(action.type) {
        case CHOOSE_AIRPORT:
            return update(state, {[action.target]:{$set:action.code}})
        default:
            return state;
    }
};

export default route;