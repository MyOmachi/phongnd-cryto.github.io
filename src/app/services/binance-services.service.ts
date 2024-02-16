import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IExchangeInformationParam, IExchangeInformationResponse, ISymbol } from '../modals/tokens.models';
import { apikey } from '../../apikey';

@Injectable({
  providedIn: 'root'
})
export class BinanceServicesService {
    private baseUrl: string = apikey.binance.baseUrl;

    constructor(private http: HttpClient) { }

    getBinanceData(data: IExchangeInformationParam): Observable<ISymbol[]> {
        const {symbol, symbols, permissions} = data;
        const params = new HttpParams().set('symbol', symbol)
                .set('symbols', encodeURIComponent(JSON.stringify(symbols)))
                .set('permissions', encodeURIComponent(JSON.stringify(permissions)));
        return this.http.get<IExchangeInformationResponse>(`${this.baseUrl}/exchangeInfo`, {
            params: params,
        }).pipe(map(res => res.symbols));
    }
}

