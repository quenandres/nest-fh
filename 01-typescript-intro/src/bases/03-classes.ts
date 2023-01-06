
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
}

export const charmander = new Pokemon(4, 'Charmander');
console.log(charmander);
charmander.scream();
charmander.speak();
