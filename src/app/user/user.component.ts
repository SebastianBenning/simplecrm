import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  constructor(public dialog: MatDialog){}

  openDialog(){
    this.dialog.open(DialogComponent);
  }
}


