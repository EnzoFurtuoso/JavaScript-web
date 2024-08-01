function tocaSom(idElementoAudio) {

  const elemento = document.querySelector(idElementoAudio);

  if (elemento && elemento.localName === 'audio') {
        elemento.play();
  } else {
    alert('Elemento não encontrado')
  }

}


const listaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0;

// enquanto

// while(contador < listaDeTeclas.length) {

//     const tecla = listaDeTeclas[contador];

//     const instrumento = tecla.classList[1];

//     //templete string
//     const idAudio = `#som_${instrumento}`;

//     listaDeTeclas[contador].onclick = function () {
//         tocaSom(idAudio);
//     }

//     contador = contador + 1;

// }

// Para

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //templete string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {

        if (event.code === "Enter" || event.code === "Space") {
            tecla.classList.add('ativa');
        }
    }  
    
    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}