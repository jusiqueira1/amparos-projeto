// document.addEventListener('DOMContentLoaded', () => {
//     const salvarButton = document.querySelector('.salvarButton');
    const fileInput = document.getElementById('file');
//     const imagemPerfil = document.getElementById('imagemPerfil');

//     salvarButton.addEventListener('click', salvarPerfil);
//     fileInput.addEventListener('change', mostrarImagemPerfil); 

// });

// async function salvarPerfil(event) {
//     event.preventDefault();

//     let formData = new FormData();
//     formData.append("nome", document.getElementById("nome").value);
//     formData.append("idade", document.getElementById("idade").value);
//     formData.append("email", document.getElementById("email").value);
//     formData.append("telefone", document.getElementById("telefone").value);
//     formData.append("file", document.getElementById("file").files[0]);

//     try {
//         let response = await fetch("http://localhost:3004/api/edit/perfil", {
//             method: 'POST',
//             body: formData
//         });

//         let result = await response.json();
//         console.log('resultado:', result);

//         if (result.success) {
//             alert("Perfil salvo com sucesso!");

//             document.getElementById("nomeExibido").innerText = "Nome: " + formData.get("nome");
//             document.getElementById("idadeExibida").innerText = "Idade: " + formData.get("idade");
//             document.getElementById("emailExibido").innerText = "E-mail: " + formData.get("email");
//             document.getElementById("telefoneExibido").innerText = "Telefone: " + formData.get("telefone");

//             document.getElementById("nome").style.display = 'none';
//             document.getElementById("idade").style.display = 'none';
//             document.getElementById("email").style.display = 'none';
//             document.getElementById("telefone").style.display = 'none';
//             document.getElementById("file").style.display = 'none';

//         } else {
//             alert("Falha ao salvar o perfil. Tente novamente.");
//         }
//     } catch (error) {
//         console.error("Erro ao salvar o perfil:", error);
//         alert("Ocorreu um erro ao tentar salvar o perfil.");
//     }
// }

// function mostrarImagemPerfil(event) {
//     const file = event.target.files[0]; 

//     if (file) {
//         const reader = new FileReader(); 

//         reader.onload = function(e) {
//             imagemPerfil.src = e.target.result; 
//             imagemPerfil.style.display = 'block'; 
//         }

//         reader.readAsDataURL(file); 
//     } else {
//         imagemPerfil.style.display = 'none'; 
//     }
// }

window.addEventListener('load', async () => {
    const nomeExibido = document.getElementById('nomeExibido');
    const idadeExibida = document.getElementById('idadeExibida');
    const emailExibido = document.getElementById('emailExibido');
    const telefoneExibido = document.getElementById('telefoneExibido');
    const imagemPerfil = document.getElementById('imagemPerfil');

    // Requisição ao backend para obter os dados do perfil
    let response = await fetch("http://localhost:3004/api/editperfil", {
        method: 'GET',
        headers: {  
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        let result = await response.json();
        let editperfil = result.data[0]; // Supondo que há apenas um perfil retornado

        // Exibir os dados no HTML
        nomeExibido.textContent = editperfil.nome || 'Nome não disponível';
        idadeExibida.textContent = editperfil.idade || 'Idade não disponível';
        emailExibido.textContent = editperfil.email || 'E-mail não disponível';
        telefoneExibido.textContent = editperfil.telefone || 'Telefone não disponível';
        imagemPerfil.src = `http://localhost:3004/uploads/${editperfil.imagem || 'default.png'}`;
    } else {
        console.error("Erro ao buscar dados do perfil");
    }
});

