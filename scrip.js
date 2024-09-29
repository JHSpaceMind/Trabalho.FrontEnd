//produtos no carrinho
const produtos = [
  (item1 = {
    id: 1,
    nome: "Camisa 1",
    preco: 49.9,
    descricao: "Camisa do anime ",
  }),
  (item2 = {
    id: 2,
    nome: "Camisa 2",
    preco: 49.9,
    descricao: "Camisa do anime ",
  }),
  (item3 = {
    id: 3,
    nome: "Camisa sazul",
    preco: 9.9,
    descricao: "Camisa do anime ",
  }),
  (item4 = {
    id: 4,
    nome: "Camisa sololevel",
    preco: 49.9,
    descricao: "Camisa do anime ",
  }),
  (item5 = {
    id: 5,
    nome: "Camisa sololevel",
    preco: 49.9,
    descricao: "Camisa do anime ",
  }),
];

//funcao abre a tela de login
function abriLogin() {
  let abri = document.getElementById("jnLogin");

  if (abri.style.display == "none") {
    abri.style.display = "flex"; // Mostra a div
  } else {
    abri.style.display = "none"; // Oculta a div novamente
  }
}
function abriContato() {
  let abri = document.getElementById("contatos");

  if (abri.style.display == "none") {
    abri.style.display = "flex"; // Mostra a div
  } else {
    abri.style.display = "none"; // Oculta a div novamente
  }
}

//adiciona no carrinho
function addProduto(itens) {
  const contator =document.getElementById('qnt-car')
  const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  if (Array.isArray(itens)) {
    itens.forEach((item) => carrinho.push(item));
  } else {
    carrinho.push(itens);
  }
  alert("Produto add com sucesso");

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  contator.innerHTML = carrinho.length;
}
//pega nome e senha
function enviar() {
  var nome = document.getElementById("nome").value;
  var senha = document.getElementById("senha").value;
  salvarUsuario(nome, senha);
}
//salvar nome e senha
function salvarUsuario(nomeUsuario, senhaUsuario) {
  const formularioJson = {
    nome: nomeUsuario,
    senha: senhaUsuario,
  };
  localStorage.setItem("form", JSON.stringify(formularioJson));
}
//envia  produto para outra pagina
function mostrarProtudo(item) {
  localStorage.setItem("produto", JSON.stringify(item));
  //window.location.href = 'descricao.html';
}

//mostrarproduto
function descricaoP() {
  const item = JSON.parse(localStorage.getItem("produto"));
  document.getElementById("titulo").innerHTML = item.nome;
  document.getElementById("descricao").innerHTML = item.descricao;
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
