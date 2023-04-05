import { Component, inject } from '@angular/core';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent {
  firestore: Firestore = inject(Firestore);
  userId: any = '';
  user: User = new User();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id');
      console.log(this.userId);
      this.getUser();
    })

  }


  async getUser() {
    let docRef = doc(this.firestore, 'users', this.userId);
    let docSnap = await getDoc(docRef);
    this.user = new User(docSnap.data());
    console.log(this.user);
  }
}
