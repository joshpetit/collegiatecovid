import firebase from 'firebase/app';
import 'firebase/firestore';
import {firebaseConfig} from './secret.js';

firebase.initializeApp(firebaseConfig)
let items = [];
const ref = firebase.firestore().collection('colleges')

export function getCollegesNames() {
  let names = []
  ref.onSnapshot( (q) => {
      q.forEach( (doc) => {
        doc.data()['Colleges'].forEach( (x) => {
          names.push(x['name'])
        })
    });
  })
  return names;
}

console.log(getCollegesNames())
