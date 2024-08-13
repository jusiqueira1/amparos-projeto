async function handleSubmit(event){
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const especialidade = document.querySelector('#especialidade').value;
    const file = document.getElementById('file').files[0];

    let formData = new FormData();
    formData.append("nome", nome);
    formData.append("especialidade", especialidade);
    formData.append("file", file);

    console.log(nome, especialidade, file)

    const response = await fetch('http://localhost:3004/api/salvar/medica', {
        method: "POST",
        body: formData
    })

    // const results = response.json();

    // console.log(results);
}

