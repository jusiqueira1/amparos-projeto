function toggleMenu() {
    const menu = document.querySelector('nav.menu-lateral');
    menu.classList.toggle('expanded');
}

function formatDate(dateStr, timeStr) {
    const [day, month, year] = dateStr.split('/');
    return `${year}-${month}-${day} ${timeStr}`;
}

function openModal(namePerson) {
    document.getElementById("namePerson").innerHTML = namePerson;
    document.getElementById("modal").classList.remove('hidden');
}

function closeModal() {
    document.getElementById("modal").classList.add('hidden');
}
async function submitDate() {
    const data_evento = document.getElementById("date").value;
    const hora_evento = document.getElementById("hora").value; 
    const formattedDate = formatDate(data_evento, hora_evento);
    const descricao = document.getElementById("descricao").value;

    closeModal();

    let data = { data_evento: formattedDate, hora_evento, descricao };
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

document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#date", {
        dateFormat: "d/m/Y",
        minDate: "today"
    });

    getProfissionais();
});

async function getProfissionais() {
    try {
        const response = await fetch('http://localhost:3004/api/profissionais', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }           
        });

        const results = await response.json();
        let profissionais = results.data;

        document.getElementById('cards').innerHTML = '';

        profissionais.forEach(profissional => {
            let html = `
                <div class='card'>
                    <img src='terapeuta 2.jpg' alt='produto'>
                    <h4>${profissional.nome}</h4>
                    <p>${profissional.especialidade}</p>
                    <button onclick="openModal('${profissional.nome}')">Agendar consulta</button>
                </div>
            `;
            document.getElementById('cards').innerHTML += html;
        });

    } catch (error) {
        console.error('Erro ao buscar profissionais:', error);
    }
}
