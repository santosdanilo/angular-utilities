import { AbstractControl } from '@angular/forms';
import { RegExp } from './expression';

export function ValidateTelefone(control: AbstractControl){
    const value = String(control.value)
    if(!value.match(RegExp.cep)) return {postalCode: true};
    return null
}