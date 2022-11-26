import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private afs: AngularFirestore) {}
  addUser(user: any) {
    user.id = this.afs.createId();
    return this.afs.collection('users').add(user);
  }
  loginProcess() {
    return this.afs.collection('users').valueChanges();
  }
}
