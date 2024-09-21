const connection = require('../config/db');

app.get('/dados', async (req, res) => { 
    try {
        const response = await fetch ('https://dados.mg.gov.br/api/3/action/datastore_search?resource_id=80b721bc-2128-4f6f-994a-c7e861739543&limit=5');
        const data = await response.json();
        res.json(data);

    } catch (error) {
        res.status(500).send('Erro ao buscar dados');

    }
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

fetchNews();


async function pegarNoticia (req, res){ 
    try {
        const response = await fetch ('https://dados.mg.gov.br/api/3/action/datastore_search?resource_id=80b721bc-2128-4f6f-994a-c7e861739543&limit=5');
        const data = await response.json();
        res.json(data);

    } catch (error) {
        res.status(500).send('Erro ao buscar dados');

    }
};   