import { PokeapiResponse } from "../interfaces/pokeapi-response.interface";
import axios from 'axios';

interface PokeApi {
    get: (url: string) => {}
}

export class PokeAPiFetchAdapter implements PokeApi {
    async get<T>( url:string ): Promise<T> {
        const resp = await fetch(url);
        const data: T = await resp.json();
        return data;
    }
}

export class PokeApiAdapter implements PokeApi {
    private readonly axios = axios;

    async get<T>( url: string ): Promise<T> {
        const { data } = await this.axios.get<T>( url );
        return data;
    }
}