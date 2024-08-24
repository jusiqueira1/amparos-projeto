

document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', handleLogin);
});
 
async function handleLogin(event) {
    event.preventDefault();
 
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
 
    let data = { email, senha };
 
    let response = await fetch("http://localhost:3004/api/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
 
    let result = await response.json();
 
    if (result.success) {
        window.location.href = "../botãodopanico/inicio.html";
    } else {
        alert("Falha ao fazer login. Verifique suas credenciais.");
    }
}
 
 
 
 