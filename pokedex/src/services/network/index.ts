import Api from '../api';
import type { AxiosResponse } from 'axios';

class Network{
    async getPokemonList(page:number):Promise<any | null> {
        const offset = (page * 20) - 20;
        try {
            const response = await Api.get(`pokemon?offset=${offset}`);
            return response?.data;
        } catch (error) {
            return null
        }
    }

    async getPokemonById(id:number):Promise<AxiosResponse | null>{
        try {
            const response = await Api.get(`pokemon/${id}`)
            return response;
        } catch (error) {
            return null;
        }
    }

    async getPokemonEvolutions(id:number):Promise<AxiosResponse | null  >{
        try {
            const response = await Api.get(`revolution-chain/${id}`)
            return response?.data;
        } catch (error) {
            return null;
        }
    }
}

export default new Network();