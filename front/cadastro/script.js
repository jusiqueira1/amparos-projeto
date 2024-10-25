async function handleSubmit(event) {
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let data = {nome, email, senha};
    
    let response = await fetch("http://localhost:3004/api/register", {
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })

    let result = await response.json();

    if (result.success) {
        alert("Bora")
        
        window.location.href = "../login/login.html";

    } else {
        alert("Nao deu");
    }
}


