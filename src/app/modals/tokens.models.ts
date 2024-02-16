export interface IToken {
    id: string;
    name: string;
    symbol: string;
    tags: string[];
    coingeckoUrl: string;
    coinmarketcapUrl: string;
    cex: string;
    images: string;
    note: string;
}

export interface IExchangeInformationParam {
    symbol: string;
    symbols: string[];
    permissions: string[];
}

export interface IExchangeInformationResponse {
    timezone: string;
    serverTime: number;
    rateLimits: string[];
    exchangeFilters: string[];
    symbols: ISymbol[];

}

export interface ISymbol {
    symbol: string;
    status: string;
    baseAsset: string;
    baseAssetPrecision: number;
    quoteAsset: string;
    quotePrecision: number;
    quoteAssetPrecision: number;
    orderTypes: string[];
    icebergAllowed: boolean;
    ocoAllowed: boolean;
    quoteOrderQtyMarketAllowed: boolean;
    allowTrailingStop: boolean;
    cancelReplaceAllowed: boolean;
    isSpotTradingAllowed: boolean;
    isMarginTradingAllowed: boolean;
    filters: any[];
    permissions: string[];
    defaultSelfTradePreventionMode: string;
    allowedSelfTradePreventionModes: string[];
}