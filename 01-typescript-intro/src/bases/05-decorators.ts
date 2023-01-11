
export class Pokemon {
    constructor(
        public readonly id:number,
        public name:string
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!`);
    }

    speak() {
        console.log(`${ this.name.repeat(3) }`);
    }
}

export const charmander = new Pokemon(1, 'charmander');