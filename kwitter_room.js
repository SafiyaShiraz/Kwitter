
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





   room_name=localStorage.getItem("room_name");   
user_name=localStorage.getItem("username");
document.getElementById("username").innerHTML="Welcome"+user_name;


function send()
{
msg=document.getElementById("message").value;
firebase.database().ref(room_name).push({
name:user_name, 

message:msg,
like:0
});
document.getElementById("message").value="";
      

}




function addroom()
{
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"Adding Room Name"
});

localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}








function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name is"+Room_names);
      row="<div class='room_name' id='+Room_names+' onclick='redirect_to_room_name(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;
      
      //End code


      });});}
getData();


function redirect_to_room_name(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";

      
}

function logout()
{

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";

}



