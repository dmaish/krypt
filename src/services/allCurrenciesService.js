import axios from 'axios';
import baseUrl from './index';

export default class AllCurrenciesApiCalls{
    API_KEY = process.env.API_KEY;
    static async getAllcurrencies(){
        const url = `${baseUrl()}/data/pricemultifull?fsyms=BTC,ETH,XRP,EOS,LTC,BCH,BNB,XLM,ADA,TRX&tsyms=USD`;
       console.log('+'.repeat(10), url);
        return axios(
            {
                method: 'get',
                url: url,
                headers: {
                    authorization: `Apikey{${this.API_KEY}}`
                }
            }
        )

    }
}