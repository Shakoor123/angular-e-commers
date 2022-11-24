import { Component, OnInit } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  item: any;
  constructor(db: Firestore) {
    //   const collections = collection(db, 'items');
    //   console.log(collections);
    //   this.item = collectionData(collections);
    //   console.log(this.item);
  }
  ngOnInit(): void {}
  // register = async () => {
  //   try {
  //     const docRef = await addDoc(collection(db, 'data'), {
  //       first: 'Ada',
  //       last: 'Lovelace',
  //       born: 1815,
  //     });
  //     console.log('Document written with ID: ', docRef.id);
  //   } catch (e) {
  //     console.error('Error adding document: ', e);
  //   }
  // };
}
