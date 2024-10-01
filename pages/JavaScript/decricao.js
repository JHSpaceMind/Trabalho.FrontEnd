//produtos
const produtos = [
  (item1 = {
    id: 1,
    nome: "Jogo GLOOMHAVEN",
    preco: 49.9,
    descricao: `Gloomhaven é um dos jogos de tabuleiro mais aclamados e populares da última década.
                Criado por Isaac Childres, ele combina elementos de RPG,
                estratégia e combate tático, oferecendo uma experiência densa e complexa.`,
    img: "../../images/jogo.jpg",
  }),
  (item2 = {
    id: 2,
    nome: "Jogo War",
    preco: 49.9,
    descricao:
      "O melhor jogo de estratégia de todos os tempos! Com War, uma batalha nunca é igual a outra, e cada jogador precisa usar toda sua habilidade militar para conquistar territórios e continentes e derrotar seus adversários.",
    img: "../../images/jogowar.png",
  }),
  (item3 = {
    id: 3,
    nome: "Camisa Atak Titan",
    preco: 9.9,
    descricao:
      "Esta camisa de algodão macio oferece conforto e estilo com uma estampa vibrante de anime. Ideal para fãs, ela combina qualidade e personalidade, ",
    img: "../../images/ataktitan.jpg",
  }),
  (item4 = {
    id: 4,
    nome: "Camisa sololevel",
    preco: 49.9,
    descricao:
      "Esta camisa de algodão macio oferece conforto e estilo com uma estampa vibrante de anime. Ideal para fãs, ela combina qualidade e personalidade, ",
    img: "../../images/sololevel.png",
  }),
  (item5 = {
    id: 5,
    nome: "Suporte Controle",
    preco: 49.9,
    descricao:
      "Que tal um suporte Gamer Personalizado para dar aquele visual unico ao seu controle",
    img: "../../images/supor.png",
  }),
  (item6 = {
    id: 6,
    nome: "Luminaria ",
    preco: 49.9,
    descricao: `Esta luminária em formato de controle remoto é a escolha perfeita para quem busca praticidade e estilo na
          iluminação do ambiente.
          Com um design moderno e minimalista, ela se integra facilmente a qualquer decoração.`,
    img: "../../images/luminaria.jpg",
  }),
  (item7 = {
    id: 7,
    nome: "Conjunto Harry Potter",
    preco: 49.9,
    descricao:
      "Este conjunto Harry Potter, que inclui um cachecol e chinelos, é a escolha perfeita para os fãs da saga mágica.",
    img: "../../images/harrypotter.jpg",
  }),
  (item8 = {
    id: 8,
    nome: "Messa para jogo RPG",
    preco: 49.9,
    descricao:
      "Esta mesa para RPG é o centro ideal para aventuras épicas e sessões emocionantes com amigos.",
    img: "../../images/mesajogorpg.jpg",
  }),
  (item9 = {
    id: 9,
    nome: "Bonecos Naruto",
    preco: 49.9,
    descricao:
      "Os bonecos do anime Naruto são colecionáveis que capturam a essência dos personagens icônicos da série. Com detalhes impressionantes e uma variedade de poses, esses bonecos são perfeitos para fãs de todas as idades.",
    img: "../../images/boneconaruto.jpg",
  }),
];


//funcao abre a tela de login
function abriLogin() {
  let abri = document.getElementById("telalogo");
  if (abri.style.display == "none") {
    abri.style.display = "flex";
  } else {
    abri.style.display = "none";
  }
}
function atualizarCarrim(){
const contator = document.getElementById("qnt-car");
const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
contator.innerHTML = carrinho.length;
}
window.onload=function(){
  atualizarCarrim();
}
//adiciona no carrinho
function addProduto(itens) {
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  if (Array.isArray(itens)) {
    itens.forEach((item) => carrinho.push(item));
  } else {
    carrinho.push(itens);
  }
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
 

  alert("Produto add com sucesso");
  atualizarCarrim()

}
//pega nome e senha
function enviar() {
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  var texbox = document.getElementById("mensagem").value;
  var checkbox = document.getElementById("check").value;
  var senha = document.getElementById("senha").value;

  salvarUsuario(nome, email,texbox,checkbox,senha);
}
//salvar nome e senha
function salvarUsuario(nomeUsuario, emailUsuario,texboxUsuario,checkboxUsuario,senhaUsuario) {
  const formularioJson = {
    nome: nomeUsuario,
    email: emailUsuario,
    texbox: texboxUsuario,
    checkbox: checkboxUsuario,
    senha: senhaUsuario,
  };
  localStorage.setItem("form", JSON.stringify(formularioJson));
}
//envia  produto para outra pagina
function mostrarProtudo(item) {
  localStorage.setItem("produto", JSON.stringify(item));
  window.location.href = `descricao.html?id=${item.id}`;
}

//mostrarproduto
function descricaoP() {
  const item = JSON.parse(localStorage.getItem("produto"));
  //add os detalhes do produto na pagina
  document.getElementById("titulo").innerHTML = "Produto: " + item.nome;
  document.getElementById("id").innerHTML = "cod: " + item.id;
  document.getElementById("preco").innerHTML = "R$" + item.preco.toFixed(2);
  document.getElementById("descricao").innerHTML =
    "Descrição: " + item.descricao;
  //add a foto do produto na pagina
  const foto = document.createElement("img");
  foto.src = item.img;
  foto.style.width = "400px";
  document.getElementById("img").appendChild(foto);
  // add o button de add no carrinho
  const botao = document.createElement("button");
  botao.innerHTML = "Add no carrinho 🛒";
  botao.onclick = function () {
    addProduto(item);
  };
  botao.classList = "btn";
  document.getElementById("container").appendChild(botao);
}

function trocaCor(){
  let botao = document.getElementsByClassName('btn')
  botao.mouseenter
  botao.style.b
}
// localStorage.setItem("carrinho", JSON.stringify(carrinhoTosave));

// const textoString = localStorage.getItem("carrinnho");

// localStorage.removeItem("carrinho");

// function enviar(){
//     let nome = document.getElementById('nome').value;
//     let senha = document.getElementById('senha').value;
//     //alert("Login com sucesso !! "+nome +" "+ senha);
// }
// const carrinho = JSON.parse(localStorage.getItem("produtos"));

// if (carrinho) {
//   console.log(carrinho.usuario); // Acessa o nome e senha do usuário
//   console.log(carrinho.produtos); // Acessa o array de produtos
// }
