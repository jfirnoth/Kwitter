
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBz85c0yZlIajWq4jfd7Z9zkFa2FWezGyk",
      authDomain: "kwitter-c0282.firebaseapp.com",
      databaseURL: "https://kwitter-c0282-default-rtdb.firebaseio.com",
      projectId: "kwitter-c0282",
      storageBucket: "kwitter-c0282.appspot.com",
      messagingSenderId: "520338246906",
      appId: "1:520338246906:web:b9f09409eea171ee824d43"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("username");

    document.getElementById("username").innerHTML = "Howdy " + username + "!";

    function add_room()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });

          localStorage.setItem("room_name", room_name);

          window.location = "kwitter_page.html";
    }

    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
     console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row; 
   });   
 });

}
getData();

function  redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}