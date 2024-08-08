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
    
    let data = {data_evento, descricao};
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
    const [day, month, year] = dateStr.split('/');
    return `${day}-${month}-${year}`;
}

console.log(result);




