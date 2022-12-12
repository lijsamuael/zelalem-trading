import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'zelalem-trading';
  subscribers!: FormGroup;
  subscribed_message: any;
  private subscriber_email: AngularFirestoreCollection | undefined
  constructor(private formBuilder: FormBuilder, private firestore: AngularFirestore, private router: Router) { }

  ngOnInit(): void {

    this.subscriber_email = this.firestore.collection('subscribers')

    this.subscribers = this.formBuilder.group({
      email: [null, Validators.email]
    })

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }
  subscribe(value: any){

    this.subscriber_email?.add(value)
    .then(res => {
      this.subscribed_message= 'Subscribed Successfully!';
      this.subscribers.reset();
    })
    .catch(err => {
      alert(err);
    })
    setTimeout(() => {
      this.subscribed_message = '';
    }, 5000)
    
  }



}
