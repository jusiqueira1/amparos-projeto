const bolinhas = document.querySelectorAll('.bolinha');

function mudarSlide(index) {
    // Remover a classe 'active' de todas as bolinhas
    bolinhas.forEach(bolinha => bolinha.classList.remove('active'));

    // Adicionar a classe 'active' à bolinha clicada
    bolinhas[index].classList.add('active');

    // Adicione aqui a lógica para mudar o slide, se necessário
}

// Adiciona um listener de clique para cada bolinha
bolinhas.forEach((bolinha, index) => {
    bolinha.addEventListener('click', () => mudarSlide(index));
});
