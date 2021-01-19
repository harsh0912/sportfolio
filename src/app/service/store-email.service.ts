import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// import { AppComponent } from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class StoreEmailService {

  constructor(public firestore: AngularFirestore) { }

  store_email(userrecord: unknown) {
    return this.firestore.collection('emails').add(userrecord);
  }
}
