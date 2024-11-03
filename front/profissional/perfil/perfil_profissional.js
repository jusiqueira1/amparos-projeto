// const fileInput = document.getElementById('file');


// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//         const clienteId = localStorage.getItem('id_usuaria');
//         console.log("Cliente salvo:", clienteId);
       
//         if (!clienteId) {
//             console.error("O ID do cliente não foi encontrado no localStorage.");
//             Swal.fire({
//                 title: 'Erro!',
//                 text: 'ID do cliente não encontrado. Por favor, faça login novamente.',
//                 icon: 'error',
//                 confirmButtonText: 'OK'
//             });
//             return;
//         }
 
//         const clienteResponse = await fetch('http://localhost:3004/api/get/perfil', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ id: clienteId })
//         });
 
//         console.log("Resposta do servidor ao buscar nome do cliente:", clienteResponse);
 
//         if (!clienteResponse.ok) {
//             throw new Error('Erro ao buscar o nome do cliente: ' + clienteResponse.statusText);
//         }
 
//         const clienteResult = await clienteResponse.json();
//         console.log("Resultado da busca pelo nome do cliente:", clienteResult);
 
//         if (clienteResult.success) {
//             document.getElementById('nome').textContent = clienteResult.data.nome;
//             document.getElementById('idade').textContent = clienteResult.data.idade;
//             document.getElementById('email').textContent = clienteResult.data.email;
 
//         } else {
//             console.log("Erro ao buscar o nome do cliente:", clienteResult.message);
//         }
//     } catch (error) {
//         console.error("Erro ao buscar dados:", error);
//     }
// });
 


// function toggleModal() {
//     const modal = document.getElementById('formLogin');
//     if (modal.style.display === 'none' || modal.style.display === '') {
//         modal.style.display = 'block'; 
//     } else {
//         modal.style.display = 'none'; 
//     }
// }

// document.getElementById('editarButton').addEventListener('click', toggleModal);

// document.getElementById('editButton').addEventListener('click', () => {
//     toggleModal(); 
// });

// document.getElementById('editarButton').addEventListener('click', () => {
//     document.getElementById('nomeInput').value = document.getElementById('nome').textContent;
//     document.getElementById('idadeInput').value = document.getElementById('idade').textContent;
//     document.getElementById('emailInput').value = document.getElementById('email').textContent;
//     document.getElementById('formLogin').style.display = 'block';
// });


// document.getElementById('editButton').addEventListener('click', async () => {
//     const nome = document.getElementById('nomeInput').value;
//     const idade = document.getElementById('idadeInput').value;
//     const email = document.getElementById('emailInput').value;
//     const clienteId = localStorage.getItem('perfil');

//     console.log("Cliente salvo:", clienteId); 

//     if (!clienteId) {
//         console.error("clienteId está vazio");
//         return Swal.fire({
//             title: 'Erro!',
//             text: 'ID do cliente não encontrado no localStorage.',
//             icon: 'error',
//             confirmButtonText: 'OK'
//         });
//     }

//     const response = await fetch('http://localhost:3004/api/edit/perfil', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             nome: nome,
//             idade: idade,
//             email: email,
//             cliente_id: clienteId
//         })
//     });

//     const result = await response.json();

//     if (result.success) {
//         document.getElementById('nome').textContent = nome;
//         document.getElementById('idade').textContent = idade;
//         document.getElementById('email').textContent = email;

//         Swal.fire({
//             title: 'Sucesso!',
//             text: 'Informações de perfil atualizadas!',
//             icon: 'success',
//             confirmButtonText: 'OK'
//         });
//         document.getElementById('formLogin').style.display = 'none';
//     } else {
//         Swal.fire({
//             title: 'Erro!',
//             text: result.message,
//             icon: 'error',
//             confirmButtonText: 'OK'
//         });
//     }
// });






// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//         const usuarioData = JSON.parse(localStorage.getItem('usuario'));
//         const clienteId = usuarioData.id;
//         const perfil = usuarioData.perfil; // Pega o perfil do usuário logado

//         if (!clienteId) {
//             console.error("O ID do cliente não foi encontrado no localStorage.");
//             Swal.fire({
//                 title: 'Erro!',
//                 text: 'ID do cliente não encontrado. Por favor, faça login novamente.',
//                 icon: 'error',
//                 confirmButtonText: 'OK'
//             });
//             return;
//         }

//         const clienteResponse = await fetch('http://localhost:3004/api/get/perfil', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ id: clienteId, perfil }) // Envia o perfil junto com o ID
//         });

//         if (!clienteResponse.ok) {
//             throw new Error('Erro ao buscar o nome do cliente: ' + clienteResponse.statusText);
//         }

//         const clienteResult = await clienteResponse.json();

//         if (clienteResult.success) {
//             document.getElementById('nome').textContent = clienteResult.data.nome;
//             document.getElementById('idade').textContent = clienteResult.data.idade || ''; // Verifica se idade existe
//             document.getElementById('email').textContent = clienteResult.data.email;
//             if (perfil === 'profissional') {
//                 document.getElementById('perfilImagem').src = "imagem_profissional.png";
//             } else {
//                 document.getElementById('perfilImagem').src = "user.png";
//             }
//         } else {
//             console.log("Erro ao buscar o nome do cliente:", clienteResult.message);
//         }
//     } catch (error) {
//         console.error("Erro ao buscar dados:", error);
//     }
// });

// function toggleModal() {
//     const modal = document.getElementById('formLogin');
//     modal.style.display = (modal.style.display === 'none' || modal.style.display === '') ? 'block' : 'none'; 
// }

// document.getElementById('editarButton').addEventListener('click', toggleModal);

// document.getElementById('editarButton').addEventListener('click', () => {
//     document.getElementById('nomeInput').value = document.getElementById('nome').textContent;
//     document.getElementById('idadeInput').value = document.getElementById('idade').textContent;
//     document.getElementById('emailInput').value = document.getElementById('email').textContent;
//     document.getElementById('formLogin').style.display = 'block';
// });

// document.getElementById('editButton').addEventListener('click', async () => {
//     const nome = document.getElementById('nomeInput').value;
//     const idade = document.getElementById('idadeInput').value;
//     const email = document.getElementById('emailInput').value;
//     const clienteId = localStorage.getItem('perfil');

//     if (!clienteId) {
//         console.error("clienteId está vazio");
//         return Swal.fire({
//             title: 'Erro!',
//             text: 'ID do cliente não encontrado no localStorage.',
//             icon: 'error',
//             confirmButtonText: 'OK'
//         });
//     }

//     const response = await fetch('http://localhost:3004/api/edit/perfil', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             nome: nome,
//             idade: idade,
//             email: email,
//             cliente_id: clienteId
//         })
//     });

//     const result = await response.json();

//     if (result.success) {
//         document.getElementById('nome').textContent = nome;
//         document.getElementById('idade').textContent = idade;
//         document.getElementById('email').textContent = email;

//         Swal.fire({
//             title: 'Sucesso!',
//             text: 'Informações de perfil atualizadas!',
//             icon: 'success',
//             confirmButtonText: 'OK'
//         });
//         document.getElementById('formLogin').style.display = 'none';
//     } else {
//         Swal.fire({
//             title: 'Erro!',
//             text: result.message,
//             icon: 'error',
//             confirmButtonText: 'OK'
//         });
//     }
// });











// document.addEventListener('DOMContentLoaded', async () => {
//     const usuarioData = JSON.parse(localStorage.getItem('usuario'));
//     const clienteId = usuarioData ? (usuarioData.perfil === 'admin' ? localStorage.getItem('id_profissional') : localStorage.getItem('id_usuaria')) : null; // Pega o ID de acordo com o perfil
//     const perfil = usuarioData ? usuarioData.perfil : null;

//     if (!clienteId || !perfil) {
//         console.error("ID do cliente ou perfil não encontrado.");
//         Swal.fire({
//             title: 'Erro!',
//             text: 'Por favor, faça login novamente.',
//             icon: 'error',
//             confirmButtonText: 'OK'
//         });
//         return;
//     }

//     const clienteResponse = await fetch('http://localhost:3004/api/get/perfil', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ id: clienteId, perfil }) // Envia o ID e o perfil
//     });

//     if (!clienteResponse.ok) {
//         throw new Error('Erro ao buscar perfil: ' + clienteResponse.statusText);
//     }

//     const clienteResult = await clienteResponse.json();

//     if (clienteResult.success) {
//         const userInfo = document.getElementById('userInfo');
//         // Limpa o conteúdo anterior
//         userInfo.innerHTML = '';

//         // Cria e exibe as informações com base no perfil
//         if (perfil === 'admin') {
//             userInfo.innerHTML += `
//                 <p><strong>Nome:</strong> ${clienteResult.data.nome}</p>
//                 <p><strong>Especialidade:</strong> ${clienteResult.data.especialidade}</p>
//             `;
//         } else {
//             userInfo.innerHTML += `
//                 <p><strong>Nome:</strong> ${clienteResult.data.nome}</p>
//                 <p><strong>Idade:</strong> ${clienteResult.data.idade}</p>
//                 <p><strong>Email:</strong> ${clienteResult.data.email}</p>
//             `;
//         }
//     } else {
//         console.error("Erro ao buscar o perfil:", clienteResult.message);
//     }
// });

// function toggleModal() {
//     const modal = document.getElementById('formLogin');
//     if (modal.style.display === 'none' || modal.style.display === '') {
//         modal.style.display = 'block'; 
//     } else {
//         modal.style.display = 'none'; 
//     }
// }

// document.getElementById('editarButton').addEventListener('click', () => {
//     const nome = document.getElementById('nome').textContent;
//     const idade = document.getElementById('idade') ? document.getElementById('idade').textContent : ''; // Verifica se o elemento existe
//     const email = document.getElementById('email') ? document.getElementById('email').textContent : ''; // Verifica se o elemento existe

//     document.getElementById('nomeInput').value = nome;
//     document.getElementById('idadeInput').value = idade;
//     document.getElementById('emailInput').value = email;
//     toggleModal(); // Abre o modal
// });

// document.getElementById('editButton').addEventListener('click', async () => {
//     const nome = document.getElementById('nomeInput').value;
//     const idade = document.getElementById('idadeInput').value;
//     const email = document.getElementById('emailInput').value;
//     const clienteId = localStorage.getItem('id_usuaria'); // Certifique-se de pegar o ID correto

//     console.log("Cliente salvo:", clienteId); 

//     if (!clienteId) {
//         console.error("clienteId está vazio");
//         return Swal.fire({
//             title: 'Erro!',
//             text: 'ID do cliente não encontrado no localStorage.',
//             icon: 'error',
//             confirmButtonText: 'OK'
//         });
//     }

//     const response = await fetch('http://localhost:3004/api/edit/perfil', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             nome: nome,
//             idade: idade,
//             email: email,
//             cliente_id: clienteId
//         })
//     });

//     const result = await response.json();

//     if (result.success) {
//         document.getElementById('nome').textContent = nome;
//         document.getElementById('idade').textContent = idade;
//         document.getElementById('email').textContent = email;

//         Swal.fire({
//             title: 'Sucesso!',
//             text: 'Informações de perfil atualizadas!',
//             icon: 'success',
//             confirmButtonText: 'OK'
//         });
//         toggleModal(); // Fecha o modal
//     } else {
//         Swal.fire({
//             title: 'Erro!',
//             text: result.message,
//             icon: 'error',
//             confirmButtonText: 'OK'
//         });
//     }
// });



// document.addEventListener('DOMContentLoaded', async () => {
//     const usuarioData = JSON.parse(localStorage.getItem('usuario'));
//     const clienteId = usuarioData.perfil === 'admin' ? localStorage.getItem('id_profissional') : localStorage.getItem('id_usuaria');
//     const perfil = usuarioData.perfil;

//     if (!clienteId || !perfil) {
//         Swal.fire({ title: 'Erro!', text: 'Por favor, faça login novamente.', icon: 'error', confirmButtonText: 'OK' });
//         return;
//     }

//     try {
//         const clienteResponse = await fetch('http://localhost:3004/api/get/perfil', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ id: clienteId, perfil })
//         });
//         const clienteResult = await clienteResponse.json();

//         if (clienteResult.success) {
//             const userInfo = document.getElementById('userInfo');
//             userInfo.innerHTML = '';

//             if (perfil === 'admin') {
//                 userInfo.innerHTML += `<p><strong>Nome:</strong> ${clienteResult.data.nome}</p>
//                                        <p><strong>Especialidade:</strong> ${clienteResult.data.especialidade}</p>
//                                        <p><strong>Email:</strong> ${clienteResult.data.email}</p>`;
//             } else {
//                 userInfo.innerHTML += `<p><strong>Nome:</strong> ${clienteResult.data.nome}</p>
//                                        <p><strong>Idade:</strong> ${clienteResult.data.idade}</p>
//                                        <p><strong>Email:</strong> ${clienteResult.data.email}</p>`;
//             }
//         } else {
//             console.error("Erro ao buscar o perfil:", clienteResult.message);
//         }
//     } catch (error) {
//         console.error("Erro ao buscar perfil:", error.message);
//     }
// });


// document.getElementById('editButton').addEventListener('click', async () => {
//     const nome = document.getElementById('nomeInput').value;
//     const idade = document.getElementById('idadeInput').value;
//     const email = document.getElementById('emailInput').value;
//     const usuarioData = JSON.parse(localStorage.getItem('usuario'));
//     const clienteId = usuarioData.perfil === 'admin' ? localStorage.getItem('id_profissional') : localStorage.getItem('id_usuaria');

//     if (!clienteId) {
//         return Swal.fire({
//             title: 'Erro!',
//             text: 'ID do cliente não encontrado no localStorage.',
//             icon: 'error',
//             confirmButtonText: 'OK'
//         });
//     }

//     const response = await fetch('http://localhost:3004/api/edit/perfil', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             id: clienteId,
//             nome,
//             idade,
//             email,
//             perfil: usuarioData.perfil
//         })
//     });

//     const result = await response.json();

//     if (result.success) {
//         document.getElementById('nome').textContent = nome;
//         document.getElementById('idade').textContent = idade;
//         document.getElementById('email').textContent = email;

//         Swal.fire({
//             title: 'Sucesso!',
//             text: 'Informações de perfil atualizadas!',
//             icon: 'success',
//             confirmButtonText: 'OK'
//         });
//         toggleModal();
//     } else {
//         Swal.fire({
//             title: 'Erro!',
//             text: result.message,
//             icon: 'error',
//             confirmButtonText: 'OK'
//         });
//     }
// });






document.addEventListener('DOMContentLoaded', async () => {
    const profissionalId = localStorage.getItem('id_profissional');

    if (!profissionalId) {
        return alert('ID do profissional não encontrado. Por favor, faça login novamente.');
    }

    try {
        const response = await fetch('http://localhost:3004/api/get/perfil/profissional', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: profissionalId })
        });
        const result = await response.json();

        if (result.success) {
            const profissionalInfo = document.getElementById('profissionalInfo');
            profissionalInfo.innerHTML = `
                <p><strong>Nome:</strong> ${result.data.nome}</p>
                <p><strong>Especialidade:</strong> ${result.data.especialidade}</p>
                <p><strong>Email:</strong> ${result.data.email}</p>
            `;
        } else {
            console.error("Erro:", result.message);
        }
    } catch (error) {
        console.error("Erro ao buscar perfil do profissional:", error);
    }
});

document.getElementById('editarButton').addEventListener('click', () => {
    document.getElementById('formLogin').style.display = 'block';
    
    const nome = document.querySelector('#profissionalInfo p:nth-child(1)').textContent.split(': ')[1];
    const especialidade = document.querySelector('#profissionalInfo p:nth-child(2)').textContent.split(': ')[1];
    const email = document.querySelector('#profissionalInfo p:nth-child(3)').textContent.split(': ')[1];

    document.getElementById('nomeInput').value = nome;
    document.getElementById('especialidadeInput').value = especialidade;
    document.getElementById('emailInput').value = email;
});

document.getElementById('saveButton').addEventListener('click', async () => {
    const nome = document.getElementById('nomeInput').value;
    const especialidade = document.getElementById('especialidadeInput').value;
    const email = document.getElementById('emailInput').value;
    const profissionalId = localStorage.getItem('id_profissional');

    if (!profissionalId) {
        return Swal.fire({
            title: 'Erro!',
            text: 'ID do profissional não encontrado. Por favor, faça login novamente.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }

    try {
        const response = await fetch('http://localhost:3004/api/edit/perfil/profissional', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id_profissional: profissionalId, nome, especialidade, email })
        });

        const result = await response.json();

        if (result.success) {
            document.getElementById('profissionalInfo').innerHTML = `
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>Especialidade:</strong> ${especialidade}</p>
                <p><strong>Email:</strong> ${email}</p>
            `;
            Swal.fire({
                title: 'Sucesso!',
                text: 'Perfil atualizado com sucesso!',
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
            text: 'Erro ao atualizar perfil.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
});









// // Função para alternar a exibição do modal
// function toggleModal() {
//     const modal = document.getElementById('formLogin');
//     modal.style.display = modal.style.display === 'none' || modal.style.display === '' ? 'block' : 'none';
// }

// document.addEventListener('DOMContentLoaded', async () => {
//     const usuarioData = JSON.parse(localStorage.getItem('usuario'));
//     const clienteId = usuarioData ? (usuarioData.perfil === 'admin' ? localStorage.getItem('id_profissional') : localStorage.getItem('id_usuaria')) : null; // Pega o ID de acordo com o perfil
//     const perfil = usuarioData ? usuarioData.perfil : null;

//     if (!clienteId || !perfil) {
//         console.error("ID do cliente ou perfil não encontrado.");
//         Swal.fire({
//             title: 'Erro!',
//             text: 'Por favor, faça login novamente.',
//             icon: 'error',
//             confirmButtonText: 'OK'
//         });
//         return;
//     }

//     const clienteResponse = await fetch('http://localhost:3004/api/get/perfil', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ id: clienteId, perfil }) // Envia o ID e o perfil
//     });

//     if (!clienteResponse.ok) {
//         throw new Error('Erro ao buscar perfil: ' + clienteResponse.statusText);
//     }

//     const clienteResult = await clienteResponse.json();

//     if (clienteResult.success) {
//         const userInfo = document.getElementById('userInfo');
//         // Limpa o conteúdo anterior
//         userInfo.innerHTML = '';

//         // Cria e exibe as informações com base no perfil
//         userInfo.innerHTML += `
//             <p><strong>Nome:</strong> ${clienteResult.data.nome}</p>
//             ${perfil === 'admin' ? `<p><strong>Especialidade:</strong> ${clienteResult.data.especialidade}</p>` : ''}
//             ${perfil !== 'admin' ? `<p><strong>Idade:</strong> ${clienteResult.data.idade}</p>` : ''}
//             <p><strong>Email:</strong> ${clienteResult.data.email}</p>
//         `;
//     } else {
//         console.error("Erro ao buscar o perfil:", clienteResult.message);
//     }
// });

// document.getElementById('editarButton').addEventListener('click', () => {
//     const nome = document.getElementById('userInfo').querySelector('strong').nextSibling.nodeValue.trim(); // Nome
//     const idade = perfil !== 'admin' ? document.getElementById('userInfo').querySelectorAll('p')[1].textContent.replace('Idade: ', '') : ''; // Idade apenas se não for admin
//     const email = document.getElementById('userInfo').querySelectorAll('p')[perfil === 'admin' ? 2 : 1].textContent.replace('Email: ', ''); // Email

//     document.getElementById('nomeInput').value = nome;
//     document.getElementById('idadeInput').value = idade;
//     document.getElementById('emailInput').value = email;
//     toggleModal(); // Abre o modal
// });

// document.getElementById('editButton').addEventListener('click', async () => {
//     const nome = document.getElementById('nomeInput').value;
//     const idade = document.getElementById('idadeInput').value;
//     const email = document.getElementById('emailInput').value;
//     const clienteId = localStorage.getItem(perfil === 'admin' ? 'id_profissional' : 'id_usuaria'); // Certifique-se de pegar o ID correto

//     if (!clienteId) {
//         console.error("clienteId está vazio");
//         return Swal.fire({
//             title: 'Erro!',
//             text: 'ID do cliente não encontrado no localStorage.',
//             icon: 'error',
//             confirmButtonText: 'OK'
//         });
//     }

//     const response = await fetch('http://localhost:3004/api/edit/perfil', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             id: clienteId,
//             nome: nome,
//             idade: idade,
//             email: email,
//             perfil: perfil // Envie o perfil também
//         })
//     });

//     const result = await response.json();

//     if (result.success) {
//         document.getElementById('userInfo').querySelector('strong').nextSibling.nodeValue = nome; // Atualiza o nome
//         if (perfil !== 'admin') {
//             document.getElementById('userInfo').querySelectorAll('p')[1].textContent = `Idade: ${idade}`; // Atualiza a idade
//         }
//         document.getElementById('userInfo').querySelectorAll('p')[perfil === 'admin' ? 2 : 1].textContent = `Email: ${email}`; // Atualiza o email

//         Swal.fire({
//             title: 'Sucesso!',
//             text: 'Informações de perfil atualizadas!',
//             icon: 'success',
//             confirmButtonText: 'OK'
//         });
//         toggleModal(); // Fecha o modal
//     } else {
//         Swal.fire({
//             title: 'Erro!',
//             text: result.message,
//             icon: 'error',
//             confirmButtonText: 'OK'
//         });
//     }
// });
