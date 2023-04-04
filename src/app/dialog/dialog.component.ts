import { Component, inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, doc, setDoc } from '@angular/fire/firestore';
import { getFirestore } from "firebase/firestore";
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  firestore: Firestore = inject(Firestore);
  user = new User();
  birthDay!: Date;
  db = getFirestore();
  constructor() { }

  async saveUser() {
    this.user.birthdate = this.birthDay.getTime();
    console.log('current user', this.user);

    await setDoc(doc(this.firestore, 'user'), this.user.toJSON);

    


  }
}

