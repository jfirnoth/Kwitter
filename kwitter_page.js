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

    username = localStorage.getItem("username")
    room_name = localStorage.getItem("room_name")

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                message: msg,
                name: username,
                like: 0
          })

          document.getElementById("msg").value=""
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log("----------");
console.log(message_data);

name = message_data['name'];
message = message_data['message'];
like = message_data['like'];

part1 = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
part2 = "<h4 class='message_h4'>" + message + "</h4>";

part3 = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
part4 = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = part1 + part2 + part3 + part4;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message.id).update({
        like : ipdated_likes    
      });
}

function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}