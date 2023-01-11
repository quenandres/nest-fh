# NEST
### _*Desarrollo backend escalable con NODEJS*_

<img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" />

[Cheatsheet](./Nest-cheatsheet.pdf)

# _Sección 2: Breve introducción a TypeScript y conocimientos generales necesarios_

Esta sección tiene por objetivo dar unas bases sobre TypeScript con la idea de que se familiaricen con los conceptos comunes usados en el día a día con Nest.
> Aquí veremos:
- Tipos básicos
- Interfaces
- Implementaciones
- Clases
- Patrón adaptador
- Principio de sustitución de Liskov
- Inyección de dependencias
- Getters
- Métodos asíncronos
- Decoradores de clases y métodos
>

Es importante recalcar que esto no es una introducción a TypeScript, son conceptos que necesito exponer porque los usaremos en el curso de Nest.

## _*9. Preparación del proyecto*_
Se crea el proyecto en vite.
## _*10. Tipos y bases sobre módulos*_
Las variables se deben exportar para crear modularidad en los archivos.
## _*11. Tipos de datos - continuación*_

## _*12. Objetos e interfaces*_
```ts
interface Pokemon {
    id: number;
    name: string;
    age?: number;
}

export const bulbasur: Pokemon = {
    id: 1,
    name: 'Bulbasur',
    age: 44
}
export const charmander: Pokemon = {
    id: 2,
    name: 'Charmander'
}
```
## _*13. Tipos en arreglos*_

```ts
export const pokemons: Pokemon[] = [];
pokemons.push(bulbasur, charmander);
```

## _*14. Clases y forma abreviada*_
Las clases son la abstracción de un objeto en el mundo real.
_Explicita_
```ts
class Pokemon {
    public id: number;
    public name: string;
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
        console.log('constructor');
    }
}
```
_Implicita_
```ts
export class Pokemon {
    constructor(
        protected id: number,
        public name: string
    ) {}
}
```
## _*15. Getters, métodos y THIS*_
Los metodos getter, dan la funcionalidad de tener propiedades con ciertas modificaciones que brindemos.

```ts
export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }`;
    }

    constructor(
        public readonly id: number,
        public name: string
    ) {}

}
```

## _*16. Métodos asíncronos*_
Un metodo asincrono es un metodo que se ejecuta a destiempo, retorna una promesa


## _*17. Colocar tipo de dato a respuestas http (genéricos)*_

con ayuda de la extension json to code, creamos la interfaz del api.

```ts
async getMoves(): Promise<Move[]> {
    const {data:{moves}} = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
    console.log(moves[0].move.name.toUpperCase());
    return moves;
}
```
Con esta especificación se tendra la ayuda en cada respuesta.

## _*18. Inyección de dependencias*_
Inyecta o añade una depedencia, para evitar que la clase, metodo o el atributo tenga toda la funcionalidad interna.
Creamos una clase adaptadora, que tendra la responsabilidad de independizar el funcionamiento de la libreria de axios, indicando su funcionamiento y extendiendolo para centralizar su funcionamiento.
