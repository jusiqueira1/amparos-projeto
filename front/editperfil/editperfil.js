document.addEventListener('DOMContentLoaded', () => {
    const salvarButton = document.querySelector('.salvarButton');
    const fileInput = document.getElementById('file');
    const imagemPerfil = document.getElementById('imagemPerfil');

    salvarButton.addEventListener('click', salvarPerfil);
    fileInput.addEventListener('change', mostrarImagemPerfil); 

});

async function salvarPerfil(event) {
    event.preventDefault();

    let formData = new FormData();
    formData.append("nome", document.getElementById("nome").value);
    formData.append("idade", document.getElementById("idade").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("telefone", document.getElementById("telefone").value);
    formData.append("file", document.getElementById("file").files[0]);

    try {
        let response = await fetch("http://localhost:3004/api/edit/perfil", {
            method: 'POST',
            body: formData
        });

        let result = await response.json();
        console.log('resultado:', result);

        if (result.success) {
            alert("Perfil salvo com sucesso!");

            document.getElementById("nomeExibido").innerText = "Nome: " + formData.get("nome");
            document.getElementById("idadeExibida").innerText = "Idade: " + formData.get("idade");
            document.getElementById("emailExibido").innerText = "E-mail: " + formData.get("email");
            document.getElementById("telefoneExibido").innerText = "Telefone: " + formData.get("telefone");

            document.getElementById("nome").style.display = 'none';
            document.getElementById("idade").style.display = 'none';
            document.getElementById("email").style.display = 'none';
            document.getElementById("telefone").style.display = 'none';
            document.getElementById("file").style.display = 'none';

        } else {
            alert("Falha ao salvar o perfil. Tente novamente.");
        }
    } catch (error) {
        console.error("Erro ao salvar o perfil:", error);
        alert("Ocorreu um erro ao tentar salvar o perfil.");
    }
}

function mostrarImagemPerfil(event) {
    const file = event.target.files[0]; 

    if (file) {
        const reader = new FileReader(); 

        reader.onload = function(e) {
            imagemPerfil.src = e.target.result; 
            imagemPerfil.style.display = 'block'; 
        }

        reader.readAsDataURL(file); 
    } else {
        imagemPerfil.style.display = 'none'; 
    }
}



