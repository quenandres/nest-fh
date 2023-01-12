class NewPokemon {
    constructor(
        public readonly id:number,
        public name:string
    ) {}

    scream() {
        console.log(`NOO!! ${ this.name.toUpperCase() }!!`);
    }

    speak() {
        console.log(`${ this.name.repeat(1) } No quiere hablar.`);
    }

    test() {
        console.log('Este es un test de la clase copia');        
    }
}

const MyDecorator = () => {
    return ( target: Function ) => {
        //console.log(target);        
        return NewPokemon;
    }
}

@MyDecorator()
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

    test() {
        console.log('Este es un test de la clase original');        
    }
}

export const charmander = new Pokemon(1, 'charmander');
charmander.scream();
charmander.speak();
charmander.test();