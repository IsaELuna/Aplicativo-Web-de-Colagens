// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjIgxnuL1qNXUZqXLqjED4snNvOndAUbM",
  authDomain: "vamos-conversar-6b629.firebaseapp.com",
  projectId: "vamos-conversar-6b629",
  storageBucket: "vamos-conversar-6b629.appspot.com",
  messagingSenderId: "303871143651",
  appId: "1:303871143651:web:b1a31beaf936a32edadfd6"
};
firebase.initializeApp(firebaseConfig);

localStorage.setItem("user_name", user_name);

window.location = "chat_room.html";

function addUser(){
  User_name = document.getElementById("username_name").value;
  
  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome do usuario"
  });
}

  function addRoom(){
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "index.html";
}

function getData()
{
  firebase.database().ref("/").on('value', function(snapshot)
  {document.getElementById("outout").innetHTML = ""; snapchot.forEach(function(childrenNapshot) {ChilldKey = childNsapshot.key;
                Room_names = childKey;
  });
  });
    getData();
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "index.html"; }

function logout(){
  localStorage.removeItem("User_name");
  localStorage.removeItem("addRoom");
  window.location="index.html";
}

