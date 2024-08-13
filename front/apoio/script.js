// Alternar a expansão do menu lateral
function toggleMenu() {
    const menu = document.querySelector('nav.menu-lateral');
    menu.classList.toggle('expanded');
}

// Inicializar os calendários Flatpickr quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#date1", {
        dateFormat: "d/m/Y",
        minDate: "today"
    });
    flatpickr("#date2", {
        dateFormat: "d/m/Y",
        minDate: "today"
    });
    flatpickr("#date3", {
        dateFormat: "d/m/Y",
        minDate: "today"
    });

    // Chama a função para carregar as médicas
    getMedicas();
});

// Função para abrir o modal com o nome da médica
function openModal(namePerson) {
    document.getElementById("namePerson").innerHTML = namePerson;
    document.getElementById("modal").classList.remove('hidden');
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("modal").classList.add('hidden');
}

// Função para submeter o agendamento
async function submitDate() {
    const data_evento = document.getElementById("date").value;
    const formattedDate = formatDate(data_evento);
    const descricao = document.getElementById("descricao").value;

    // Fecha o modal após submeter
    closeModal();

    // Dados a serem enviados para o servidor
    let data = { data_evento: formattedDate, descricao };
    console.log(data);

    try {
        let response = await fetch("http://localhost:3004/api/agendar", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        let result = await response.json();

        if (result.success) {
            alert("Agendamento realizado com sucesso!");
        } else {
            alert("Erro ao realizar o agendamento.");
        }
    } catch (error) {
        console.error('Erro:', error);
        alert("Erro ao conectar-se com o servidor.");
    }
}

// Função para formatar a data para o formato desejado
function formatDate(dateStr) {
    const [day, month, year] = dateStr.split('/');
    return `${day}-${month}-${year}`;
}

// Função para buscar e exibir as médicas
async function getMedicas() {
    try {
        const response = await fetch('http://localhost:3004/api/medicas', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const results = await response.json();
        let medicas = results.data;

        // Limpa o conteúdo anterior
        document.getElementById('cards').innerHTML = '';

        // Adiciona cada médica ao HTML
        medicas.forEach(medica => {
            let html = `
                <div class='card'>
                    <img src='terapeuta 2.jpg' alt='produto'>
                    <h4>${medica.nome}</h4>
                    <p>${medica.especialidade}</p>
                    <button onclick="openModal('${medica.nome}')">Agendar consulta</button>
                </div>
            `;
            document.getElementById('cards').innerHTML += html;
        });

    } catch (error) {
        console.error('Erro ao buscar médicas:', error);
    }
}

