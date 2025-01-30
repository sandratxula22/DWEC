# APUNTES

# (), [], [()]

## Property Binding: Corchetes []
- Property Binding: Para enlazar una propiedad de un elemento o componente
- Se usa para pasar valores de la clase TypeScript al HTML
* <img [src]="imagenUrl" [alt]="descripcion">
* imagenUrl = 'https://angular.io/assets/images/logos/angular/angular.png'; 
* descripcion = 'Logo de Angular';

## Event Binding: Paréntesis ()
- Event Binding: Vinculación de eventos
- Se usa para escuchar eventos del usuario (click, input, submit, etc.) y así ejecutar el código del TypeScript
* <button (click)="saludar()">Saludar</button>
* saludar() { alert('¡Hola desde Angular!'); }

## Two-way Binding: Corchetes [] y Paréntesis ()
- Two way binding: enlace bidireccional
- Se usa para sincronizar datos entre la vista y el componente (útil con formularios)
* <input [(ngModel)]="nombre">
* <p>Hola, {{ nombre }}</p>
* import { FormsModule } from '@angular/forms'; --> Para [(ngModel)]
* nombre = 'Angular'; --> AppComponent

# |, ??, !

## Union Type: Definir múltiples tipos posibles |
- El operador | permite que una variable acepte más de un tipo de dato
* let dato: string | number;
* dato = 'Hola'; // string
* dato = 123; // number
* dato = true; // Error

## Nullish Coalescing: Operador de fusión nula ??
- El operador ?? devuelve el primer valor no null ni undefined
* let usuario: string | null = null;
* let nombre = usuario ?? "Usuario por defecto";
* console.log(nombre); // "Usuario por defecto"

* let usuario: string | null = "Sandra";
* let nombre = usuario ?? "Usuario por defecto";
* console.log(nombre); // "Sandra"

## Non-Null Assertion: Indica que un valor no es null o undefined !
- El operador ! le dice a TypeScript que confíe en que la variable nunca será null o undefined, evitando errores de compilación
- Se usa cuando estamos 100% seguros de que el valor nunca será null o undefined
* let mensaje: string | null = "Hola";
* console.log(mensaje!.toUpperCase()); // "HOLA"
- Peligro: Si mensaje fuera null, daría un error en tiempo de ejecución

* interface Usuario {
    nombre?: string;
  }
* let usuario: Usuario = {};  
* console.log(usuario.nombre.toUpperCase()); // Error: 'nombre' puede ser undefined
* console.log(usuario.nombre!.toUpperCase()); // Peligroso si 'nombre' es undefined
