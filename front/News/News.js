const bolinhas = document.querySelectorAll('.bolinha');

function mudarSlide(index) {
    bolinhas.forEach(bolinha => bolinha.classList.remove('active'));

    bolinhas[index].classList.add('active');

}

bolinhas.forEach((bolinha, index) => {
    bolinha.addEventListener('click', () => mudarSlide(index));
});





function displayNews(newsArray) {
    const newsContainer = document.getElementById("cards");
    newsContainer.innerHTML = '';

    newsArray.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('card');

        newsItem.innerHTML = `
            <img src="assets/images/exemplo1.jpg" alt="Imagem da Notícia">
            <h3>${news.titulo || 'Título não disponível'}</h3>
            <p>${news.descricao || 'Descrição não disponível'}</p>
            <button>Leia Mais</button>
        `;

        newsContainer.appendChild(newsItem);
    });
}
function testDisplayNews() {
    const testNews = [
        { titulo: 'Notícia 1', descricao: 'Descrição da notícia 1' },
        { titulo: 'Notícia 2', descricao: 'Descrição da notícia 2' }
    ];
    displayNews(testNews);
}

testDisplayNews();

//fetchNews();


window.addEventListener('load', () => {
    let perfil = localStorage.getItem('perfil');

    let div = document.getElementById('form-news')

    if(perfil === 'admin') {
        div.style.display = 'block'
    }
})