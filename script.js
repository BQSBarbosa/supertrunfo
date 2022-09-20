// listar cartas
var carta1 = {
  nome: "Chevette L 1.6 1985",
  imagem:
    "https://www.coisasengracadas.com.br/wp-content/uploads/2018/07/super-trunfo-colonia-2.jpg",
  atributos: {
    carga: 1.5,
    economia: 7,
    estilo: 4,
    locurage: 9
  }
};

var carta2 = {
  nome: "Escort GL 1.6 1989",
  imagem:
    "https://www.coisasengracadas.com.br/wp-content/uploads/2018/07/super-trunfo-colonia-3.jpg",
  atributos: {
    carga: 0.5,
    economia: 8,
    estilo: 4,
    locurage: 2
  }
};

var carta3 = {
  nome: "F-1000 Gabinada 1991",
  imagem:
    "https://www.coisasengracadas.com.br/wp-content/uploads/2018/07/super-trunfo-colonia-4.jpg",
  atributos: {
    carga: 3,
    economia: 3,
    estilo: 10,
    locurage: 4
  }
};

var carta4 = {
  nome: "Fusca 1300L 1978",
  imagem:
    "https://www.coisasengracadas.com.br/wp-content/uploads/2018/07/super-trunfo-colonia-5.jpg",
  atributos: {
    carga: 0.5,
    economia: 5,
    estilo: 6,
    locurage: 7
  }
};

var carta5 = {
  nome: "Kombi 1600 1986",
  imagem:
    "https://www.coisasengracadas.com.br/wp-content/uploads/2018/07/super-trunfo-colonia-6.jpg",
  atributos: {
    carga: 7,
    economia: 4,
    estilo: 4,
    locurage: 4
  }
};

var carta6 = {
  nome: "Monza SL/E 2.0 1989",
  imagem:
    "https://www.coisasengracadas.com.br/wp-content/uploads/2018/07/super-trunfo-colonia-7.jpg",
  atributos: {
    carga: 1.5,
    economia: 1,
    estilo: 8,
    locurage: 6
  }
};

var carta7 = {
  nome: "Rural 2.3 1975",
  imagem:
    "https://www.coisasengracadas.com.br/wp-content/uploads/2018/07/super-trunfo-colonia-8.jpg",
  atributos: {
    carga: 3,
    economia: 2,
    estilo: 6,
    locurage: 1
  }
};

var carta8 = {
  nome: "Fiete Uno 1.0 1988",
  imagem:
    "https://www.coisasengracadas.com.br/wp-content/uploads/2018/07/super-trunfo-colonia-9.jpg",
  atributos: {
    carga: 0.5,
    economia: 10,
    estilo: 3,
    locurage: 3
  }
};

var carta9 = {
  nome: "Opala 4CIL 1978",
  imagem:
    "https://www.coisasengracadas.com.br/wp-content/uploads/2018/07/super-trunfo-colonia-10.jpg",
  atributos: {
    carga: 2,
    economia: 2,
    estilo: 9,
    locurage: 7
  }
};

var carta10 = {
  nome: "C-10 4CIL Picape 1980",
  imagem:
    "https://www.coisasengracadas.com.br/wp-content/uploads/2018/07/super-trunfo-colonia-1.jpg",
  atributos: {
    carga: 8,
    economia: 3,
    estilo: 4,
    locurage: 2
  }
};

// listar cartas
var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10
];

var cartaMaquina;
var cartaJogador;

function sortearCarta() {
  cartaMaquina = cartas[parseInt(Math.random() * cartas.length)];
  cartaJogador = cartas[parseInt(Math.random() * cartas.length)];

  while (cartaJogador == cartaMaquina) {
    cartaJogador = cartas[parseInt(Math.random() * cartas.length)];
  }

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  document.getElementById("resultado").innerHTML = "";

  exibirOpcoes();
}

function exibirOpcoes() {
  var opcoes = document.getElementById("opcoes");
  var opcoesTexto = "<img src= " + cartaJogador.imagem + "><br>";

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<input type ='radio' name='atributo' value='" +
      atributo +
      "'>" +
      atributo +
      ": " +
      cartaJogador.atributos[atributo] +
      "<br>";
  }

  opcoes.innerHTML = opcoesTexto;
}

function selecao() {
  var radioAtributos = document.getElementsByName("atributo");

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked === true) {
      return radioAtributos[i].value;
    }
  }
}

function jogar() {
  var atributoSelecionado = selecao();
  var elementoResultado = document.getElementById("resultado");
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];
  var botaoJogarNovamente = document.getElementById("btnJogarNovamente");
  var botaoJogar = document.getElementById("btnJogar");

  elementoResultado.innerHTML = "<img src= " + cartaMaquina.imagem + "><br>";

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML +=
      "Seu atributo " +
      atributoSelecionado +
      " é " +
      valorCartaJogador +
      " e o atributo " +
      atributoSelecionado +
      " do adversário é " +
      valorCartaMaquina +
      ".<br>Opa você venceu, PARABÉNS!";
  } else if (valorCartaJogador < valorCartaMaquina) {
    elementoResultado.innerHTML +=
      "Seu atributo " +
      atributoSelecionado +
      " é " +
      valorCartaJogador +
      " e o atributo " +
      atributoSelecionado +
      " do adversário é " +
      valorCartaMaquina +
      ".<br>Ixa, você perdeu... tente novamente!";
  } else {
    elementoResultado.innerHTML +=
      "Seu atributo " +
      atributoSelecionado +
      " é " +
      valorCartaJogador +
      " e o atributo " +
      atributoSelecionado +
      " do adversário é " +
      valorCartaMaquina +
      ".<br>Deu empate, tente novamente!";
  }

  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnJogar").disabled = true;
  botaoJogar.disabled = true;
  botaoJogarNovamente.disabled = false;
}

function reiniciar() {
  var botaoJogar = document.getElementById("btnJogar");
  var botaoSortear = document.getElementById("btnSortear");
  var botaoJogarNovamente = document.getElementById("btnJogarNovamente");
  var elementoResultado = document.getElementById("resultado");
  var opcoes = document.getElementById("opcoes");

  cartaJogador = "";
  cartaMaquina = "";
  elementoResultado.innerHTML = "";
  opcoes.innerHTML = "";

  botaoJogar.disabled = true;
  botaoSortear.disabled = false;
  botaoJogarNovamente.disabled = true;
}