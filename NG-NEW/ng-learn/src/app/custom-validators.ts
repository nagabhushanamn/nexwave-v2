
import { AbstractControl } from '@angular/forms';

export function rangeValidator(c: AbstractControl): { [key: string]: boolean } | null {

    if (c.value >= 1000 && c.value <= 2000) {
        return null;
    } else {
        return { "range": true }
    }

}

export function emailsMatchValidator(c: AbstractControl): { [key: string]: boolean } | null {

    let email=c.get('email').value;
    let cemail=c.get('cemail').value;

    if(email!==cemail){
        return {"match":true}
    }

    return null;

}

