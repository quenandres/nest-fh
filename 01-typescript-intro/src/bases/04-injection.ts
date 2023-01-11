import axios from 'axios';
import { PokeApiAdapter } from './api/pokeApi.adapter';
import { Move, PokeapiResponse } from './interfaces/pokeapi-response.interface';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        private readonly http: PokeApiAdapter
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        //const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        const data = await this.http.get('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves );
        
        return data.moves;
    }

}

const pokeApi = new PokeApiAdapter();

export const charmander = new Pokemon( 4, 'Charmander', pokeApi );
export const squrtle = new Pokemon( 3, 'Squrtle', pokeApi );
export const pikachu = new Pokemon( 2, 'Pikachu', pokeApi );

charmander.getMoves();