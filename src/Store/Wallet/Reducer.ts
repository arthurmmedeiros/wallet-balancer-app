import {Reducer} from 'redux';
import { stocksTest } from '../TestData/Stocks';
import { WalletActions, WalletActionTypes } from './Actions';
import { IWalletStore } from './Types';

const INITIAL_STATE: IWalletStore = {
    stocks: stocksTest,
    loading: false
}

const reducer: Reducer<IWalletStore, WalletActionTypes> = (state = INITIAL_STATE, action:WalletActionTypes ) => {
    switch(action.type) {
        case WalletActions.AddStock: {
            return {...state};
        }
        default:
            return state;
    }
}

export default reducer;