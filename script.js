let numeroImgOlhosAtual = 1;
let numeroImgBocaAtual = 1;
const totalImagens = 18;
const imagemOlhosMostrada = document.getElementById('olhos');
const imagemBocaMostrada = document.getElementById('boca');

function trocarImagemOlhos() {
  let numeroAlteradoOlhos = numeroImgOlhosAtual.toString().padStart(2, '0');
  imagemOlhosMostrada.src = `images/olhos/olhos${numeroAlteradoOlhos}.svg`;
}    

function trocarImagemBoca() {
  let numeroAlteradoBoca = numeroImgBocaAtual.toString().padStart(2, '0');
  imagemBocaMostrada.src = `images/bocas/boca${numeroAlteradoBoca}.svg`;
}

document.getElementById('proximoOlhos').addEventListener('click', function() {
  numeroImgOlhosAtual = numeroImgOlhosAtual < totalImagens ? numeroImgOlhosAtual + 1 : 1;
  trocarImagemOlhos();
});    

document.getElementById('anteriorOlhos').addEventListener('click', function() {
  numeroImgOlhosAtual = numeroImgOlhosAtual > 1 ? numeroImgOlhosAtual - 1 : totalImagens;
  trocarImagemOlhos();
});    

document.getElementById('proximoBoca').addEventListener('click', function() {
  numeroImgBocaAtual = numeroImgBocaAtual < totalImagens ? numeroImgBocaAtual + 1 : 1;
  trocarImagemBoca();
});

document.getElementById('anteriorBoca').addEventListener('click', function() {
  numeroImgBocaAtual = numeroImgBocaAtual > 1 ? numeroImgBocaAtual - 1 : totalImagens;
  trocarImagemBoca();
});

document.addEventListener('keydown', function(event) {
  if (event.key.toLowerCase() === 'o') {
      numeroImgOlhosAtual = numeroImgOlhosAtual < totalImagens ? numeroImgOlhosAtual + 1 : 1;
      trocarImagemOlhos();
  } else if (event.key.toLowerCase() === 'i') {
      numeroImgOlhosAtual = numeroImgOlhosAtual > 1 ? numeroImgOlhosAtual - 1 : totalImagens;
      trocarImagemOlhos();
  } else if (event.key.toLowerCase() === 'b') {
      numeroImgBocaAtual = numeroImgBocaAtual < totalImagens ? numeroImgBocaAtual + 1 : 1;
      trocarImagemBoca();
  } else if (event.key.toLowerCase() === 'v') {
      numeroImgBocaAtual = numeroImgBocaAtual > 1 ? numeroImgBocaAtual - 1 : totalImagens;
      trocarImagemBoca();
  }
});