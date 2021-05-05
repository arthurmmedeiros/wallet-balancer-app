export interface IStock {
    name: string;
    quantity: number;
    price: number;
    totalInWallet?: number;
    percentInWallet?: number;
    idealPercentInWallet: number;
    idealTotalInWallet?: number;
    shouldBuy?: number;
    shouldBuyUnity?: number;
}

export interface IAddStock {
    name: string;
    quantity: number;
}
