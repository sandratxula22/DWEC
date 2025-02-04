# EJERCICIOS

- Proyecto 1: Creación de un proyecto y prueba de su funcionamiento 
    * Interpolación en los archivos HTML de Angular
    * Sintaxis de Template para estructuras condicionales y repetitivas
    * Captura de eventos
    * Enlace de propiedades (Property binding)

- Proyecto 2: Componentes - creación
    * ng generate component dado
    * Import component

- Proyecto 3: Componentes - pasar datos de la componente padre a la componente hija
    * Import Input
    * @Input() valor: string = ""; --> En el componente

- Proyecto 4: Componentes - disparo de eventos de la componente hija a la componente padre
    * Import Input y Output // EventEmitter

- Proyecto 5: Componentes - llamar a métodos de la componente hija desde el template del padre
    * <app-selectornumerico [minimo]="1" [maximo]="10" #selector1></app-selectornumerico>
    * <button (click)="selector1.fijar(1)">Fijar en 1</button>

- Proyecto 6: Componentes - llamar a métodos de la componente hija desde la clase padre
    * export class AppComponent {
        @ViewChild('selector2') selector2!:     SelectornumericoComponent;

        fijarSelector2(valor:number) {
          this.selector2.fijar(valor);
        }
    }
    * <button (click)="fijarSelector2(1)">Fijar en 1</button>

- Proyecto 7: Formularios - formulario basado en plantillas
    * Para usar ngModel -> Importar FormsModule en app.component.ts
    * Ejemplo [(ngModel)]

- Proyecto 8: Formularios - formulario basado en plantillas
    * Ejercicio de tabla con agregar, modificar, borrar y seleccionar

- Proyecto 13: Formularios reactivos - validaciones estándar anidadas
    * Uso de ReactiveFormsModule, FormControl, FormGroup, Validators
- Proyecto 14: Formularios reactivos - validaciones personalizadas
- Proyecto 16: Definición de rutas
- Proyecto 17: Párametros en una ruta
- Proyecto 18: Captura de ruta no existente
- Proyecto 19: Rutas anidadas
- Proyecto 43: Angular e instalación de Bootstrap original // Creación de un componente: barra de menú
    * npm install bootstrap --save
    * angular.json:
     "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "src/styles.css"
      ],
      "scripts": [
        "node_modules/bootstrap/dist/js/bootstrap.min.js"
      ]
    * ng generate component barrademenu --prefix boot
- Proyecto 49: Promise u observable