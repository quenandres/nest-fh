
import axios from 'axios';

export class Pokemon {
    /* public id: number;
    public name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        console.log('constructor');
    } */
    //
    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }`;
    }

    constructor(
        public readonly id: number,
        public name: string
    ) {}

    scream() {
        console.log(`${this.name.toUpperCase()}!!!!`);        
    }

    speak() {
        console.log(`${this.name.repeat(3)}`);
    }

    async getMoves() {
        const {data:{moves}} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
        console.log(moves);        
        return moves;
    }
}

export const charmander = new Pokemon(4, 'Charmander');
console.log(charmander);
charmander.scream();
charmander.speak();
charmander.getMoves();