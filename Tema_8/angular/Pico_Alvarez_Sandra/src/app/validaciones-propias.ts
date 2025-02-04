import { AbstractControl, ValidationErrors } from '@angular/forms';

export class ValidacionesPropias {
    static masDeTres(control: AbstractControl): ValidationErrors | null {
        let letras = parseInt(control.value.length);
        if(letras > 3){
          return null;
        }else{
          return { masDeTres: true }
        }
    }
}
