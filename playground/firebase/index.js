import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDs2x3dG9MFMtqyvVrbT8Y--Qlz59Xm040",
    authDomain: "todo-app-cf5dd.firebaseapp.com",
    databaseURL: "https://todo-app-cf5dd.firebaseio.com",
    projectId: "todo-app-cf5dd",
    storageBucket: "todo-app-cf5dd.appspot.com",
    messagingSenderId: "63608962667"
  };
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'SuSu',
    age: 25
  }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('New todo added', snapshot.key, snapshot.val());
});
todosRef.push({
  text: 'Todo 1'
});
todosRef.push({
  text: 'Todo 2'
});
//
// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });

//
// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });

// firebaseRef.update({
//   'app/name': 'Todo Application',
//   'user/name': 'May'
// });

// firebaseRef.child('app').update({
//   name: 'Todo Application'
// });
//
// firebaseRef.child('user').update({
//   name: 'Garu'
// });

// firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
//   version: '2.0',
//   name: null
// });

// firebaseRef.child('user/age').remove();
// firebaseRef.child('user').update({
//   age: null
// });

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

// var logData = (snapshot) => {
//   console.log('Got value', snapshot.val());
// }
//
// firebaseRef.on('value', logData);
// firebaseRef.off();
//
// firebaseRef.update({isRunning: false});

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('Got value');
// });
//
// firebaseRef.child('user').update({name: 'Mike'});
//
// firebaseRef.child('app').update({name: 'Something Else'});
