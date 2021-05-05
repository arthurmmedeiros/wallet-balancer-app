import { IAddStock } from '../Stock/Types';

export enum WalletActions {
    AddStock = '@wallet/add/stock',
}

export interface AddStockRequestAction {
    type: typeof WalletActions.AddStock;
    payload: IAddStock;
}

export type WalletActionTypes = AddStockRequestAction;
