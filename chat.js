localStorage.setItem("user_name", user_name);

window.location = "chat_room.html";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjIgxnuL1qNXUZqXLqjED4snNvOndAUbM",
    authDomain: "vamos-conversar-6b629.firebaseapp.com",
    projectId: "vamos-conversar-6b629",
    storageBucket: "vamos-conversar-6b629.appspot.com",
    messagingSenderId: "303871143651",
    appId: "1:303871143651:web:b1a31beaf936a32edadfd6"
  };

  function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adicionando nome da sala"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData()
{
  firebase.database().ref("/").on('value', function(snapshot)
  {document.getElementById("outout").innetHTML = ""; snapchot.forEach(function(childrenNapshot) {ChilldKey = childNsapshot.key;
                Room_names = childKey;

          function redirectToRoomName(){
            
          }

                });
  });
    getData();
}