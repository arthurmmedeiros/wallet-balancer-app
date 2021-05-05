import { IStock } from '../Stock/Types';

export enum WalletActions {
    AddStock = '@wallet/add/stock',
    LoadStocks = '@wallet/load/stocks',
}

export interface AddStockRequestAction {
    type: typeof WalletActions.AddStock;
    payload: IStock;
}

export interface LoadStockRequestAction {
    type: typeof WalletActions.LoadStocks;
    payload: IStock[];
}

export type WalletActionTypes = AddStockRequestAction | LoadStockRequestAction;
