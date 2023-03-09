let imagem = document.querySelector('#imagem');
let botãoVermelho = document.querySelector('#vermelho')
let botãoVerde = document.querySelector('#verde')
let botãoAmarelo = document.querySelector('#amarelo')
let botãoAutomatico = document.querySelector('#automatico')
let i = 0

botãoVermelho.addEventListener('click', function () {
    i = 3
    imagem.src = '/img/vermelho.png';
});

botãoVerde.addEventListener('click', function () {
    i = 3
    imagem.src = '/img/verde.png';
});

botãoAmarelo.addEventListener('click', function () {
    i = 3
    imagem.src = '/img/amarelo.png';
});


botãoAutomatico.addEventListener('click', function () {
    i = 0
    automatico()
})

function automatico() {
    if (i == 0) {
        i = 1
        imagem.src = '/img/vermelho.png';
        setTimeout(automatico, 1000)
    } else if (i == 1) {
        i = 2
        imagem.src = '/img/amarelo.png';
        setTimeout(automatico, 1000)
    } else if (i == 2) {
        i = 0
        imagem.src = '/img/verde.png';
        setTimeout(automatico, 1000)
    }
}