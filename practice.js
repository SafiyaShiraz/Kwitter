
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyDS3kiBihNVQFQzvh0PtJKWNpu8NO3T8Mw",
    authDomain: "kwitterapp-e97ad.firebaseapp.com",
    databaseURL: "https://kwitterapp-e97ad-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-e97ad",
    storageBucket: "kwitterapp-e97ad.appspot.com",
    messagingSenderId: "1052381450360",
    appId: "1:1052381450360:web:c87b91087adcf3ebb6dd8d"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function adduser()
{
user_name=document.getElementById("username").value;
firebase.database().ref("/").child(user_name).update({
    purpose:"Adding user"
});


}