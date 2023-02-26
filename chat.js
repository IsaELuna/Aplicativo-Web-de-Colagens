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
var database = firebase.database();

function addSala(){
  var roomName = document.getElementById("roomName").value;
  localStorage.setItem("roomName", roomName);
  database.ref("/").child(roomName).update({
    proposito:"adicionar sala"
  })
}

var campo ='';

function lerDados(){
  database.ref("/").on("value",(data)=>{
    campo ='';
    data.forEach((subpasta)=>{
      sala = subpasta.key;
      linha = "<div class='sala' id="+sala+" onclick='irSala(this.id)' >"+sala+"</div> <hr>";
      campo +=linha;
    });
    document.getElementById("output").innerHTML = campo;
  })
}
lerDados()

function irSala(sala){
  localStorage.setItem("roomName", sala);
  window.location = 'kwitterPage.html'
}

function logout(){
  //Remove o Nome de Usuario e sala do localStorage
  localStorage.removeItem("userName");
  localStorage.removeItem("roomName");
  //Move o usuario para o index.html
  window.location = 'index.html';
}

//exibe o nome do usuário no site kwitterRoom.js
function carregar(){
  var nome = localStorage.getItem("userName");
 document.getElementById("userName").innerHTML = " Seja bem vindo(a) "  +  nome;
}

