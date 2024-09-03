// async function fetchNews() {
//     const apiUrl = "https://dados.mg.gov.br/api/3/action/datastore_search?resource_id=80b721bc-2128-4f6f-994a-c7e861739543&limit=5";
    
//     try {
//         const response = await fetch(apiUrl);
//         const data = await response.json();

//         // Verifica se a requisição foi bem-sucedida e se há dados
//         if (data.success) {
//             displayNews(data.result.records);
//         } else {
//             console.error('Erro ao buscar notícias:', data.error);
//         }
//     } catch (error) {
//         console.error('Erro ao buscar dados da API:', error);
//     }
// }

// function displayNews(newsArray) {
//     const newsContainer = document.getElementById('news-container');
//     newsContainer.innerHTML = ''; // Limpa o conteúdo anterior

//     newsArray.forEach(news => {
//         const newsItem = document.createElement('div');
//         newsItem.classList.add('card'); // Usa a classe de estilo 'card' para formatar como card

//         newsItem.innerHTML = `
//             <img src="assets/images/exemplo1.jpg" alt="Imagem da Notícia">
//             <h3>${news.titulo}</h3>
//             <p>${news.descricao}</p>
//             <button>Leia Mais</button>
//         `;

//         newsContainer.appendChild(newsItem);
//     });
// }

// // Carrega as notícias ao iniciar a página
// fetchNews();
