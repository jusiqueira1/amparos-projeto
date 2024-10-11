// document.addEventListener('DOMContentLoaded', () => {
//     const salvarButton = document.querySelector('.salvarButton');
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
// function toggleMenu() {
//     const menu = document.querySelector('nav.menu-lateral');
//     menu.classList.toggle('expanded');
// }
 
// document.addEventListener('DOMContentLoaded', function() {
//     flatpickr("#date1", {
//         dateFormat: "d/m/Y",
//         minDate: "today"
//     });
//     flatpickr("#date2", {
//         dateFormat: "d/m/Y",
//         minDate: "today"
//     });
//     flatpickr("#date3", {
//         dateFormat: "d/m/Y",
//         minDate: "today"
//     });
//     getProfissionais();
// });
 
// function openModal(namePerson) {
//     document.getElementById("namePerson").innerHTML = namePerson;
//     document.getElementById("modal").classList.remove('hidden');
// }
 
// function closeModal() {
//     document.getElementById("modal").classList.add('hidden');
// }
 














// async function submitDate() {
//     const data_evento = document.getElementById("date").value;
//     const formattedDate = formatDate(data_evento);
//     const descricao = document.getElementById("descricao").value;
 
//     closeModal();
 
//     let data = { data_evento: formattedDate, descricao };
//     console.log(data);
 
//     try {
//         let response = await fetch("http://localhost:3004/api/agendar", {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data)
//         });
 
//         let result = await response.json();
 
//         if (result.success) {
//             alert("Agendamento realizado com sucesso!");
//         } else {
//             alert("Erro ao realizar o agendamento.");
//         }
//     } catch (error) {
//         console.error('Erro:', error);
//         alert("Erro ao conectar-se com o servidor.");
//     }
// }
 
// async function getProfissionais() {
//     const images = 'http://localhost:3004/uploads/';
//     try {
//         const response = await fetch('http://localhost:3004/api/profissionais', {
//             method: "GET",
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
 
//         const results = await response.json();
//         let profissionais = results.data;
//         console.log(profissionais)
//         document.getElementById('cards').innerHTML = '';
 
//         profissionais.forEach(profissional => {
//             let html = `
//                 <div class='card'>
//                     <img src='${images + editperfil.imagem}' alt='Imagem'>
//                     <h4>${profissional.nome}</h4>
//                     <p>${profissional.especialidade}</p>
//                     <button onclick="openModal('${profissional.nome}')">Agendar consulta</button>
//                 </div>
//             `;
//             document.getElementById('cards').innerHTML += html;
//         });
 
//     } catch (error) {
//         console.error('Erro ao buscar profissionais:', error);
//     }
// }




const fileInput = document.getElementById('file');


document.addEventListener('DOMContentLoaded', async () => {
    try {
        const clienteId = localStorage.getItem('perfil');
        console.log("ID do cliente recuperado:", clienteId);
       
        if (!clienteId) {
            console.error("O ID do cliente não foi encontrado no localStorage.");
            Swal.fire({
                title: 'Erro!',
                text: 'ID do cliente não encontrado. Por favor, faça login novamente.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }
 
        const clienteResponse = await fetch('http://localhost:3004/api/get/perfil', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: clienteId })
        });
 
        console.log("Resposta do servidor ao buscar nome do cliente:", clienteResponse);
 
        if (!clienteResponse.ok) {
            throw new Error('Erro ao buscar o nome do cliente: ' + clienteResponse.statusText);
        }
 
        const clienteResult = await clienteResponse.json();
        console.log("Resultado da busca pelo nome do cliente:", clienteResult);
 
        if (clienteResult.success) {
            document.getElementById('nome').textContent = clienteResult.data.nome;
            document.getElementById('email').textContent = clienteResult.data.email;
 
        } else {
            console.log("Erro ao buscar o nome do cliente:", clienteResult.message);
        }
    } catch (error) {
        console.error("Erro ao buscar dados:", error);
    }
});
 


function toggleModal() {
    const modal = document.getElementById('formLogin');
    if (modal.style.display === 'none' || modal.style.display === '') {
        modal.style.display = 'block'; 
    } else {
        modal.style.display = 'none'; 
    }
}

document.getElementById('editarButton').addEventListener('click', toggleModal);

document.getElementById('editButton').addEventListener('click', () => {
    toggleModal(); 
});

document.getElementById('editarButton').addEventListener('click', () => {
    document.getElementById('nomeInput').value = document.getElementById('nome').textContent;
    document.getElementById('emailInput').value = document.getElementById('email').textContent;
    document.getElementById('formLogin').style.display = 'block';
});

document.getElementById('editButton').addEventListener('click', async () => {
    const formData = new FormData();
    const nome = document.getElementById('nomeInput').value;
    const email = document.getElementById('emailInput').value;

    formData.append('nome', nome);
    formData.append('email', email);

    try {
        const response = await fetch('http://localhost:3004/api/edit/perfil', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (result.success) {
            document.getElementById('nome').textContent = nome;
            document.getElementById('email').textContent = email;
            Swal.fire({
                title: 'Sucesso!',
                text: 'Informações de perfil atualizadas!',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            document.getElementById('formLogin').style.display = 'none';
        } else {
            Swal.fire({
                title: 'Erro!',
                text: result.message,
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    } catch (error) {
        Swal.fire({
            title: 'Erro!',
            text: 'Erro ao enviar as informações.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});