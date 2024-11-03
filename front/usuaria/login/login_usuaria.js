

// document.addEventListener('DOMContentLoaded', () => {
//     const loginButton = document.getElementById('loginButton');
//     loginButton.addEventListener('click', handleLogin);
// });
 
// async function handleLogin(event) {
//     event.preventDefault();
 
//     let email = document.getElementById("email").value;
//     let senha = document.getElementById("senha").value;
 
//     let data = { email, senha };
 
//     let response = await fetch("http://localhost:3004/api/login", {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     });
 
//     let result = await response.json();
 
//     if (result.success) {
  
//         localStorage.setItem('perfil', result.data.id)
//         window.location.href = "../botaodopanico/inicio.html";
//     } else {
//         alert("Falha ao fazer login. Verifique suas credenciais.");
//     }
// }
 


document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', handleLogin);
});

async function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const data = { email, senha };

    const response = await fetch("http://localhost:3004/api/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.success) {
        const { id, perfil } = result.data;
        localStorage.setItem("usuario", JSON.stringify(result.data));
        localStorage.setItem("perfil", perfil);
        localStorage.setItem(perfil === 'admin' ? "id_profissional" : "id_usuaria", id);


        window.location.href = "../inicio/inicio.html";
    } else {
        alert(result.message);
    }
}

 
 
 