//YOUR FIREBASE LINKS
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
   
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code



//End code
      } });  }); }
getData();


function logout()
{

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}

