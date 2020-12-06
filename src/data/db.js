import firebase from './secret.js'
let items = [];

export function getCollegesNames() {
  let ref = firebase.firestore().collection('colleges')
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
