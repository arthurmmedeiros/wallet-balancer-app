import { combineReducers } from 'redux';
import wallet from './Wallet/Reducer';

const rootReducer = combineReducers({
    wallet,
});

export default rootReducer;
