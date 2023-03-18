import axios from 'axios';
import type {AxiosResponse, AxiosInstance} from 'axios'

class Api{
    http:AxiosInstance;
    constructor(){
        const baseURL = import.meta.env.VITE_API_URL;
        this.http = axios.create({
            baseURL
        });
    }
    async get(endpoint:string, params={}){
        const config = {
            header: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            params
        }
        try {
            let response:AxiosResponse = await this.http.get(endpoint, config)
            return response;
        } catch (error) {
            return null
        }
    }
}

export default new Api();