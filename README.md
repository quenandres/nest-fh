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
