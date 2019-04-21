import axios from 'axios';
import baseUrl from './index';

export default class homePageService{
    API_KEY = process.env.API_KEY;
    static async getAllcurrencies(){
        const url = `${baseUrl()}/data/pricemultifull?fsyms=BTC,ETH,XRP,EOS,LTC,BCH,BNB,XLM,ADA,TRX&tsyms=USD`;
        const response = axios(
            {
                method: 'get',
                url: url,
                headers: {
                    authorization: `Apikey{"5382abc3b51a0b3130282386e1d0cf5825d5192b65a5a5b709e2117a1e3aa78c"}`
                }
            }
        );
        return response;

    }
} 