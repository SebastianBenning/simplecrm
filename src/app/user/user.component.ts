import { Component, inject } from '@angular/core';
import { MatDialog, } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { DocumentData, Firestore, collection, doc, getDocs, onSnapshot, query, where, } from '@angular/fire/firestore';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  firestore: Firestore = inject(Firestore);
  allUsers: any[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    let users = query(collection(this.firestore, 'users'));
    onSnapshot(users, (querySnapshot) => {
      this.allUsers = [];
      querySnapshot.forEach(() => {
        this.allUsers = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      });
    });


  }



  openDialog() {
    this.dialog.open(DialogComponent);
  }
}


function setApps(arg0: any) {
  throw new Error('Function not implemented.');
}

