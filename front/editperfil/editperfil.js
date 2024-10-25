const fileInput = document.getElementById('file');


document.addEventListener('DOMContentLoaded', async () => {
    try {
        const clienteId = localStorage.getItem('perfil');
        console.log("Cliente salvo:", clienteId);
       
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
            document.getElementById('idade').textContent = clienteResult.data.idade;
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
    document.getElementById('idadeInput').value = document.getElementById('idade').textContent;
    document.getElementById('emailInput').value = document.getElementById('email').textContent;
    document.getElementById('formLogin').style.display = 'block';
});


document.getElementById('editButton').addEventListener('click', async () => {
    const nome = document.getElementById('nomeInput').value;
    const idade = document.getElementById('idadeInput').value;
    const email = document.getElementById('emailInput').value;
    const clienteId = localStorage.getItem('perfil');

    console.log("Cliente salvo:", clienteId); 

    if (!clienteId) {
        console.error("clienteId está vazio");
        return Swal.fire({
            title: 'Erro!',
            text: 'ID do cliente não encontrado no localStorage.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }

    const response = await fetch('http://localhost:3004/api/edit/perfil', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            idade: idade,
            email: email,
            cliente_id: clienteId
        })
    });

    const result = await response.json();

    if (result.success) {
        document.getElementById('nome').textContent = nome;
        document.getElementById('idade').textContent = idade;
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
});





