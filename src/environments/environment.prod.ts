import { getFirestore } from '@angular/fire/firestore';
import { firebaseApp$, initializeApp } from '@angular/fire/app';

export const environment = {
  firebase: {
    projectId: 'angular-ecommers',
    appId: '1:306459789608:web:209ac242864fade743281d',
    storageBucket: 'angular-ecommers.appspot.com',
    apiKey: 'AIzaSyDuZKO_7B7v8TmNc-TnpmXov-8iaUaiVn8',
    authDomain: 'angular-ecommers.firebaseapp.com',
    messagingSenderId: '306459789608',
    measurementId: 'G-TXVBEWVX5D',
  },
  production: true,
};
const app = initializeApp(environment.firebase);

export const db = getFirestore(app);
