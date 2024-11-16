// window.addEventListener('load', async () => {
//     const newsContainer = document.getElementById("cards");
//     newsContainer.innerHTML = '';

//     let response = await fetch("http://localhost:3004/api/noticias", {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     let result = await response.json();

//     let noticias = result.data;

//     noticias.forEach(news => {
//         const newsItem = document.createElement('div');
//         newsItem.classList.add('card');
//         let images = "http://localhost:3004/uploads/"

//         newsItem.innerHTML = `
//             <div class="imagem">
//                  <img src="${images}${news.imagem || 'fundoroxo.png'}" alt="Imagem da Notícia">
//             </div>
//              <div class="info_noticias">
//                 <h3>${news.title || 'Título não disponível'}</h3>
//                 <p>${news.descricao || 'Descrição não disponível'}</p>
//                 <button onclick="window.open('${news.link}', '_blank')">Leia Mais</button>

//              </div>
            
//         `;

//         newsContainer.appendChild(newsItem);
//     });
// })

// window.addEventListener('load', () => {
//     let perfil = localStorage.getItem('perfil');
//     let div = document.getElementById('form-news');

//     if (perfil === 'admin') {
//         div.style.display = 'block';
//     }
// });

// async function cadastrar(event) {
//     event.preventDefault(); 

//     let usuario = JSON.parse(localStorage.getItem("usuario"))[0];

//     const idUsuario = usuario.id;
//     const title = document.getElementById('title').value;
//     const description = document.getElementById('description').value;
//     const link = document.getElementById('link').value;
//     const file = document.getElementById('file').files[0];

//     let formData = new FormData();

//     formData.append("idUsuario", idUsuario)
//     formData.append("title", title)
//     formData.append("description", description)
//     formData.append("link", link)
//     formData.append("file", file)
    

//     const response = await fetch("http://localhost:3004/api/noticias/cadastrar", {
//         method: 'POST',
//         body: formData
//     })

//     const results = await response.json()

//     if (results.success) {
//         alert(results.message)
//     } else {
//         alert(results.message)
//     }
// }




// window.addEventListener('load', async () => {
//     const newsContainer = document.getElementById("cards");
//     newsContainer.innerHTML = '';

//     try {
//         const response = await fetch("http://localhost:3004/api/noticias", { method: 'GET' });
//         const result = await response.json();

//         if (result.success) {
//             let noticias = result.data;
//             noticias.forEach(news => {
//                 const newsItem = document.createElement('div');
//                 newsItem.classList.add('card');
//                 const images = "http://localhost:3004/uploads/";

//                 newsItem.innerHTML = `
//                     <div class="imagem">
//                         <img src="${images}${news.imagem || 'fundoroxo.png'}" alt="Imagem da Notícia">
//                     </div>
//                     <div class="info_noticias">
//                         <h3>${news.title || 'Título não disponível'}</h3>
//                         <p>${news.descricao || 'Descrição não disponível'}</p>
//                         <button onclick="window.open('${news.link}', '_blank')">Leia Mais</button>
//                     </div>
//                 `;
//                 newsContainer.appendChild(newsItem);
//             });
//         }
//     } catch (error) {
//         console.error("Erro ao carregar as notícias:", error);
//     }

//     let perfil = localStorage.getItem('perfil');
//     document.getElementById('cadastro_noticias').style.display = (perfil === 'admin') ? 'block' : 'none';
// });

// async function cadastrar(event) {
//     event.preventDefault();

//     const id_profissional = JSON.parse(localStorage.getItem("id_profissional"))[0];
//     if (!id_profissional) {
//         alert("Erro: Usuário não encontrado.");
//         return;
//     }

//     const formData = new FormData();
//     formData.append("id_profissional", id);
//     formData.append("title", document.getElementById('title').value);
//     formData.append("description", document.getElementById('description').value);
//     formData.append("link", document.getElementById('link').value);
//     // formData.append("file", document.getElementById('file').files[0]);

//     try {
//         const response = await fetch("http://localhost:3004/api/noticias/cadastrar", { method: 'POST', body: formData });
//         const result = await response.json();

//         alert(result.message);
//         if (result.success) location.reload();
//     } catch (error) {
//         console.error("Erro ao cadastrar notícia:", error);
//     }
// }







window.addEventListener('load', async () => {
    const newsContainer = document.getElementById("cards");
    newsContainer.innerHTML = '';

    try {
        const response = await fetch("http://localhost:3004/api/noticias", { method: 'GET' });
        const result = await response.json();

        if (result.success) {
            let noticias = result.data;
            noticias.forEach(news => {
                const newsItem = document.createElement('div');
                newsItem.classList.add('card');
                const images = "http://localhost:3004/uploads/";

                newsItem.innerHTML = `
                    <div class="imagem">
                        <img src="${images}${news.imagem || 'fundoroxo.png'}" alt="Imagem da Notícia">
                    </div>
                    <div class="info_noticias">
                        <h3>${news.title || 'Título não disponível'}</h3>
                        <p>${news.descricao || 'Descrição não disponível'}</p>
                        <button onclick="window.open('${news.link}', '_blank')">Leia Mais</button>
                    </div>
                `;
                newsContainer.appendChild(newsItem);
            });
        }
    } catch (error) {
        console.error("Erro ao carregar as notícias:", error);
    }

    let perfil = localStorage.getItem('perfil');
    document.getElementById('cadastro_noticias').style.display = (perfil === 'admin') ? 'block' : 'none';
    

});

async function cadastrar(event) {
    event.preventDefault();

    const id_profissional = localStorage.getItem("id_profissional"); // Obter diretamente
    if (!id_profissional) {
        alert("Erro: Usuário não encontrado.");
        return;
    }

    const formData = new FormData();
    formData.append("id_profissional", id_profissional); // Usar o id_profissional corretamente
    formData.append("title", document.getElementById('title').value);
    formData.append("description", document.getElementById('description').value);
    formData.append("link", document.getElementById('link').value);
    // Uncomment if you want to include file upload
    formData.append("file", document.getElementById('file').files[0]);

    try {
        const response = await fetch("http://localhost:3004/api/noticias/cadastrar", { method: 'POST', body: formData });
        const result = await response.json();

        alert(result.message);
        if (result.success) location.reload();
    } catch (error) {
        console.error("Erro ao cadastrar notícia:", error);
    }
}   
