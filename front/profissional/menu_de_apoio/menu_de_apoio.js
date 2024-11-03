function toggleMenu() {
    const menu = document.querySelector('nav.menu-lateral');
    menu.classList.toggle('expanded');
}
 
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
    getProfissionais();
});
 
function openModal(namePerson) {
    document.getElementById("namePerson").innerHTML = namePerson;
    document.getElementById("modal").classList.remove('hidden');
}
 
function closeModal() {
    document.getElementById("modal").classList.add('hidden');
}
 
async function submitDate() {
    const data_evento = document.getElementById("date").value;
    const formattedDate = formatDate(data_evento);
    const descricao = document.getElementById("descricao").value;
 
    closeModal();
 
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
 
function formatDate(dateStr) {
    const [date] = dateStr.split('/');
    return `${date}`;
}
 
async function getProfissionais() {
    const images = 'http://localhost:3004/uploads/';
    try {
        const response = await fetch('http://localhost:3004/api/profissionais', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        });
 
        const results = await response.json();
        let profissionais = results.data;
        console.log(profissionais)
        document.getElementById('cards').innerHTML = '';
 
        profissionais.forEach(profissional => {
            let html = `
                <div class='card'>
                    <img src='${images + profissional.imagem}' alt='Imagem'>
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