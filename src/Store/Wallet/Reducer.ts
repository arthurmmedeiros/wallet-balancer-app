import { Reducer } from 'redux';
import { clone } from 'lodash';
import { WalletActions, WalletActionTypes } from './Actions';
import { IWalletStore } from './Types';

const INITIAL_STATE: IWalletStore = {
    stocks: undefined,
};

const reducer: Reducer<IWalletStore, WalletActionTypes> = (
    state = INITIAL_STATE,
    action: WalletActionTypes
) => {
    switch (action.type) {
        case WalletActions.AddStock: {
            const clonedStocks = clone(state.stocks);
            return {
                ...state,
                stocks:
                    clonedStocks === undefined
                        ? [action.payload]
                        : [...clonedStocks, action.payload],
            };
        }
        case WalletActions.LoadStocks: {
            return {
                ...state,
                stocks: action.payload,
            };
        }
        default:
            return state;
    }
};

export default reducer;
