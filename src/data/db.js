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

export function getCollegeStats(name) {
  let ref = firebase.firestore().collection('colleges_stats').doc(name).get()
  let data = {}
  ref.then( (x) => {
    let obj = x.data()
    data['isolation'] = obj['isolation']
    data['pos_cases'] = obj['pos_cases']
    data['pos_rate'] = obj['pos_rate']
    data['total_tests'] = obj['total_tests']
  })
  return data
}

export function getCollegePolicies(name) {
  let ref = firebase.firestore().collection('college_policies').doc(name).get()
  let data = {}
  ref.then( (x) => {
    let obj = x.data()
    data['checkin'] = obj['checkin']
    data['classes'] = obj['classes']
    data['frequency'] = obj['frequency']
    data['people'] = obj['people']
  })
  return data
}