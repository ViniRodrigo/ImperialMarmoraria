let menu = document.querySelector('.menu');
let lista = document.querySelector('.cabecalho-lista');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    lista.classList.toggle('active');
})