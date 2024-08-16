const apiKey = '1234567890abcdef1234567890abcdef';
const newsContainer = document.getElementById('news-container');
const searchInput = document.getElementById('search');
const latestNewsList = document.getElementById('latest-news');

// Função para carregar as notícias
async function loadNews(query = '') {
    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${apiKey}&language=pt`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayNews(data.articles);
        displayLatestNews(data.articles);
    } catch (error) {
        console.error('Erro ao carregar as notícias:', error);
        newsContainer.innerHTML = '<p>Não foi possível carregar as notícias. Tente novamente mais tarde.</p>';
    }
}

// Função para exibir as notícias
function displayNews(articles) {
    newsContainer.innerHTML = ''; // Limpa o container de notícias
    if (articles.length === 0) {
        newsContainer.innerHTML = '<p>Nenhuma notícia encontrada.</p>';
        return;
    }
    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-item');
        
        const newsTitle = document.createElement('h2');
        newsTitle.textContent = article.title;
        
        const newsDate = document.createElement('small');
        newsDate.textContent = new Date(article.publishedAt).toLocaleDateString('pt-BR');
        
        const newsContent = document.createElement('p');
        newsContent.textContent = article.description || 'Descrição não disponível.';
        
        const newsLink = document.createElement('a');
        newsLink.href = article.url;
        newsLink.target = '_blank';
        newsLink.textContent = 'Leia mais';

        newsItem.appendChild(newsTitle);
        newsItem.appendChild(newsDate);
        newsItem.appendChild(newsContent);
        newsItem.appendChild(newsLink);
        
        newsContainer.appendChild(newsItem);
    });
}

// Função para exibir as últimas notícias
function displayLatestNews(articles) {
    latestNewsList.innerHTML = ''; // Limpa o container de últimas notícias
    const latestArticles = articles.slice(0, 5);
    latestArticles.forEach(article => {
        const newsItem = document.createElement('li');
        
        const newsLink = document.createElement('a');
        newsLink.href = article.url;
        newsLink.target = '_blank';
        newsLink.textContent = article.title;

        newsItem.appendChild(newsLink);
        latestNewsList.appendChild(newsItem);
    });
}

// Função para buscar notícias
function searchNews() {
    const query = searchInput.value.trim();
    loadNews(query);
}

// Carrega as notícias quando a página for carregada
window.onload = () => {
    loadNews();
};
