async function handleLogin(event) {
    event.preventDefault();


    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let data = {email,senha};
   
    let response = await fetch("http://localhost:3004/api/login", {
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })

    let result = await response.json();

    if (result.success) {
        //alert("Bora")
        // direciona para pagina de login
        window.location("../apoio/menudeapoio.html")

    } else {
        alert("Nao deu");
    }
}