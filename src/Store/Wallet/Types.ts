import { IStock } from '../Stock/Types';

export interface IWalletStore {
    readonly stocks?: IStock[];
}
