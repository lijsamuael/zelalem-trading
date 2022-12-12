import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { 
    
   }
    order = new FormGroup({        
    customerName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''), 
    message: new FormControl(false)
})
}
