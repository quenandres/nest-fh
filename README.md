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


## _*19. Genéricos + Sustitución de Liskov*_
Es un estandar que el primer generico sea _<T>_ 
```ts
async get<T>( url: string ) {
    const { data } = await this.axios.get( url );
    return data;
}
```

Principio de Liskov: Cada clase que hereda de otra puede usarse como su padre sin necesidad de conocer las diferencias entre ellas.

## _*20. Resolver el principio de sustitución*_

Se le añade una dependecia a la clase.

```ts
import axios from 'axios';
export interface HttpAdapter {
    get<T>(url: string): Promise<T>
}


export class PokeAPiFetchAdapter implements HttpAdapter {
    async get<T>( url:string ): Promise<T> {
        const resp = await fetch(url);
        const data: T = await resp.json();
        return data;
    }
}

export class PokeApiAdapter implements HttpAdapter {
    private readonly axios = axios;

    async get<T>( url: string ): Promise<T> {
        const { data } = await this.axios.get<T>( url );
        return data;
    }
}
```


```ts
constructor(
    public readonly id: number, 
    public name: string,
    private readonly http: HttpAdapter
) {}

const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeAPiFetchAdapter();

export const charmander = new Pokemon( 4, 'Charmander', pokeApiAxios );
export const squrtle = new Pokemon( 3, 'Squrtle', pokeApiAxios );
export const pikachu = new Pokemon( 2, 'Pikachu', pokeApiFetch );
```

Al cumplir el atributo _http_ con la interfaz de HttpAdapter acepta ambas clases.

## _*21. Decoradores*_
Los decoradores son funciones.

```ts
const MyDecorator = () => {
    return ( target: Function ) => {
        //console.log(target);        
        return NewPokemon;
    }
}
```

Si llamamos a otra clase, los atributos se pintan como si originalmente viniera de esta segunda clase.

# _*22. Decorador de método - @Deprecated*_
Usamos un decorador que nos sirve para volver obsoleto un metodo, poniendo en consola un mensaje de por que es obsoleto.

# _Sección 3: Primero pasos en Nest_
Nest envuelve express y fastify.

Estamos entrando a nuestra primera sección sobre Nest, aquí veremos:



### ¿Qué es Nest?
### ¿Por qué usarlo?
> Explicación sobre cada archivo en un proyecto nuevo de Nest

- Core Nest building blocks
- Módulos
- Controladores (Post, Patch, Get, Delete)
- Primeros decoradores
- Servicios
- Inyección de dependencias
- Pipes
- Exception Filters
>
Adicionalmente estaremos creando un Rest Api inicial para ir explicando cada concepto paso a paso.

## _*27. ¿Qué es Nest? y ¿Por qué usarlo?*_
Framework de backend, que usa express y fastify como base. Usa typescript por defecto y es la manera recomendable de utilizarlo.

## _*28. Instalar Nest CLI - Command Line Interface*_

## _*29. Generar nuestro primer proyecto - CarDealership*_

## _*30. Explicación de cada archivo y directorio*_

## _*31. Módulos*_
Los modulos agrupan y desacoplan un conjunto de funcionalidades especifica por dominio.
Ej: auth.module.ts, encargado de todo lo relacionado con la autenticación.

## _*32. Controladores*_
Controlan rutas, son los encargados re recibir la solicitud y dar una respuesta.

> Ayuda con comandos
```bash
nest -h
```

Decorador de controlador, que indica que ruta debe responder este controlador.
```ts
@Controller('cars')
```

## _*33. Desactivar Prettier*_

```bash 
npm uninstall prettier
```

## _*34. Obtener un carro por ID*_

Creamos 2 metodos para que respondan a las solicitudes.


## _*35. Servicios*_
Todos servicios son providers, pero no todos los providers son servicios.
Los providers son clases que se pueden inyectar

Alojan la lógica de negocio de tal manera que sea reutilizable mediante inyección de dependencias. 
Ej: PeliculasService para todo lo relacionado a obtener, grabar, actualizar o eliminar información de películas.

```bash
nest g s cars --no-spec
```
Se le envia la bandera de _--no-spec_  para que no cree archivos de test.

```ts
@Injectable()
```
El decorador _Injectable_ indica que se puede inyectar.

## _*36. Inyección de dependencias*_
Se inyecta el servicio de cars, para que sea utilizado por el controlador.

