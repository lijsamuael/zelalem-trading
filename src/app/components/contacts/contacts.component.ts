import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  http: any;
  contactForm!: FormGroup;
  submitMessage: any;
  private order: AngularFirestoreCollection | undefined
  constructor(private builder: FormBuilder, private orderService: OrderService, private firestore: AngularFirestore) { }

  ngOnInit(): void {

    this.order = this.firestore.collection('order');

    this.contactForm = this.builder.group({
      name: [null, Validators.required],
      email: [null, Validators.email],
      phone: [null, Validators.required],
      message: [null, Validators.required]
    })
  }

  submit(value: any){
    this.order?.add(value)
    .then(res => {
      this.submitMessage= 'Message Sent Successfully!';
    })
    .catch(err => {
      alert(err);
    })
    setTimeout(() => {
      this.submitMessage = '';
      this.contactForm.reset();
    }, 5000)

  }

    
  

}
