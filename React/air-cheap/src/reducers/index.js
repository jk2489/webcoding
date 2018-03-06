import { combineReducers } from 'redux';
import airports from './airport';
import route from './route';

const rootRouter = combineReducers({
    airports,
    route
});

export default rootRouter;