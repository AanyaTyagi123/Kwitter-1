const firebaseConfig = {
      apiKey: "AIzaSyAZYGkQxZ8NSAkqkVjMyYZ-Izq0rD3BGGA",
      authDomain: "class-94-ec770.firebaseapp.com",
      databaseURL: "https://class-94-ec770-default-rtdb.firebaseio.com",
      projectId: "class-94-ec770",
      storageBucket: "class-94-ec770.appspot.com",
      messagingSenderId: "452935223514",
      appId: "1:452935223514:web:232bb989a76c10aeeb7de3",
      measurementId: "G-T4X653C70R"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name;
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room names - " + Room_names);
      row = "<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'> #"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
