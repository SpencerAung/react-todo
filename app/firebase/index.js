import firebase from 'firebase';
try {
  var config = {
      apiKey: "AIzaSyDs2x3dG9MFMtqyvVrbT8Y--Qlz59Xm040",
      authDomain: "todo-app-cf5dd.firebaseapp.com",
      databaseURL: "https://todo-app-cf5dd.firebaseio.com",
      projectId: "todo-app-cf5dd",
      storageBucket: "todo-app-cf5dd.appspot.com",
      messagingSenderId: "63608962667"
    };

  firebase.initializeApp(config);
} catch (e) {

}


export var firebaseRef =firebase.database().ref();
export default firebase;
