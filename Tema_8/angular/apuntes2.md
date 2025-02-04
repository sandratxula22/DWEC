# Hackathlon: Ejercicio completo

* Instalar bootstrap
* FormGroup y FormControl para el login
* Petición a la API para iniciar sesión con HttpClient (app.config.ts) <--- IMPORTANTE
* ng generate service login
* Recoger parámetro de url y usarlo para API:
    * home.component.ts: 
        - import { RouterLink } from '@angular/router';
        - imports: [ RouterLink ]
    * home.component.html: routerLink="usuario/{{usuario.id}}"
    * app.routes.ts: path:'usuario/:id'
    * usuario-detalles.component.ts: import { ActivatedRoute, ParamMap } from '@angular/router';
* Guardar token en localStorage para poder comprobar si existe o no y en función de eso redirigir
* Crear logout para borrar el token
* Añadir un modal para formulario para insertar usuarios
    * home.service.ts ---> addUser();
    * 


Input y Output
HttpClient // Promesas // Observables
Añadir
Editar
Eliminar
Pasar dos parámetros
Validaciones Angular y Propias