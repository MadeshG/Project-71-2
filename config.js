import firebase from 'firebase'
require("@firebase/firestore")

  const firebaseConfig = {
    apiKey: "AIzaSyCk1hMZgN403A7bE3ax6CkT18A1Yd7NkZc",
    authDomain: "project-71-c013e.firebaseapp.com",
    projectId: "project-71-c013e",
    storageBucket: "project-71-c013e.appspot.com",
    messagingSenderId: "330808430717",
    appId: "1:330808430717:web:38aaf47ddce0f5623aa114"
  };
 

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

