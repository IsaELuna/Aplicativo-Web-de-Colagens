const firebaseConfig = {
  apiKey: "AIzaSyCjIgxnuL1qNXUZqXLqjED4snNvOndAUbM",
  authDomain: "vamos-conversar-6b629.firebaseapp.com",
  databaseURL: "https://vamos-conversar-6b629-default-rtdb.firebaseio.com",
  projectId: "vamos-conversar-6b629",
  storageBucket: "vamos-conversar-6b629.appspot.com",
  messagingSenderId: "303871143651",
  appId: "1:303871143651:web:b1a31beaf936a32edadfd6"
};
  
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

var nome = localStorage.getItem("userName");
var nomeSala = localStorage.getItem("roomName");

function enviar(){
  var msg = document.getElementById("msg").value;
  //Guardar mensagem no firebase
    db.ref(nomeSala).push({
      like:0, msg:msg, nome:nome
    });
}

function logout(){
  localStorage.removeItem("userName");
localStorage.removeItem("roomName");
window.location ='index.html';
}


//ler do banco de dados as mensagens e mostrar na tela
db.ref(nomeSala).on("value", (data)=>{
//limpa a div
document.getElementById("output").innerHTML = '';
//repete comando para cada valor
data.forEach((dados)=>{
  if(dados.key != 'proposito'){
    var id = dados.key;
    var valores = dados.val();
    //guarda os valores do banco de dados
    var mensagem = valores['msg'];
    var nome = valores['nome'];
    var likes = valores['like'];
    //faz uma tag html para a mensagem
    var msghtml  =  "<h3> "+ mensagem +"<img src='selo.png' width=20 height=20/></h3>";
    //faz uma tag html para o nome
    var nomehtml = "<h4 class='text-muted'> "+nome+"</h4>";
    //faz um botão para os likes
    var botaoLike = "<button class='btn btn-warning' id="+id+" value="+likes+" onclick='attLike(this.id)'>";
    var likeshtml = "<span class='glyphicon glyphicon-thumbs-up'></span>Likes:"+likes+"</button>";
    linha = msghtml + nomehtml + botaoLike + likeshtml;
    document.getElementById("output").innerHTML += linha
  }
})
})
//atualiza o site
function attLike(id){
likes = document.getElementById(id).value;
likes = Number(likes) + 1;
db.ref(nomeSala).child(id).update({
  like:likes
})
}
