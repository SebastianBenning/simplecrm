import { Component, inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { Firestore, doc, setDoc, collection } from '@angular/fire/firestore';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  firestore: Firestore = inject(Firestore);
  user = new User();
  birthDay!: Date;
  loading= false;
  constructor(public dialogRef: MatDialogRef<DialogComponent>) { }

  async saveUser() {
    this.user.birthdate = this.birthDay.getTime();
    this.loading=true;
    let newUserRef = doc(collection(this.firestore, 'users'));
    await setDoc(newUserRef, this.user.toJSON());
    this.loading=false;
    this.dialogRef.close();
  }
}

