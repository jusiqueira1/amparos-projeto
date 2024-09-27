window.addEventListener('load', async () => {
    const newsContainer = document.getElementById("cards");
    newsContainer.innerHTML = '';

    let response = await fetch("http://localhost:3004/api/noticias", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    let result = await response.json();

    let noticias = result.data;

    noticias.forEach(news => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('card');
        let images = "http://localhost:3004/uploads/"

        newsItem.innerHTML = `
            <img src="${images}${news.imagem || 'fundoroxo.png'}" alt="Imagem da Notícia">
            <h3>${news.title || 'Título não disponível'}</h3>
            <p>${news.descricao || 'Descrição não disponível'}</p>
            <button onclick="openModal('${news.title}')">Leia Mais</button>
        `;

        newsContainer.appendChild(newsItem);
    });
})

window.addEventListener('load', () => {
    let perfil = localStorage.getItem('perfil');
    let div = document.getElementById('form-news');

    if (perfil === 'admin') {
        div.style.display = 'block';
    }
});

async function cadastrar(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    let usuario = JSON.parse(localStorage.getItem("usuario"))[0];

    const idUsuario = usuario.id;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const link = document.getElementById('link').value;
    const file = document.getElementById('file').files[0];

    let formData = new FormData();

    formData.append("idUsuario", idUsuario)
    formData.append("title", title)
    formData.append("description", description)
    formData.append("link", link)
    formData.append("file", file)

    const response = await fetch("http://localhost:3004/api/noticias/cadastrar", {
        method: 'POST',
        body: formData
    })

    const results = await response.json()

    if (results.success) {
        alert(results.message)
    } else {
        alert(results.message)
    }
}

