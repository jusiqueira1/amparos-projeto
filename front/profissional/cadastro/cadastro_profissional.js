// async function handleSubmit(event){
//     event.preventDefault();

//     const nome = document.getElementById('nome').value;
//     const usuario = document.getElementById('usuario').value;
//     const password = document.getElementById('password').value;
//     const especialidade = document.querySelector('#especialidade').value;
//     // const file = document.getElementById('file').files[0];

//     let formData = new FormData();

//     formData.append("nome", nome);
//     formData.append("usuario", usuario);
//     formData.append("password", password);
//     formData.append("especialidade", especialidade);
//     // formData.append("file", file);

//     console.log(nome, especialidade)

//     const response = await fetch('http://localhost:3004/api/salvar/profissional', {
//         method: "POST",
//         body: formData
//     })  

//     let result = await response.json();
 
//     if (result.success) {
//         window.location.href = "./login.html";
//     } else {
//         alert("Falha ao cadastrar Verifique suas credenciais.");
//     }

// }

// async function logar(event) {
//     event.preventDefault()

//     let usuario = document.getElementById("usuario").value;
//     let password = document.getElementById("password").value;

//     let data = {usuario, password}

//     const response = await fetch('http://localhost:3004/api/login/profissional', {
//         method: "POST",
//         headers: {
//             "Content-Type":"application/json"
//         },
//         body: JSON.stringify(data)
//     })  

//     let result = await response.json();
 
//     if (result.success) {
//         localStorage.setItem("usuario", JSON.stringify(result.data))
//         window.location.href = "../botaodopanico/inicio.html";
//     } else {
//         alert("Falha ao cadastrar Verifique suas credenciais.");
//     }
// }


// // function sair() {
// //     localStorage.removeItem("usuario");
// //     window.location.href = "./login.html"
// // }






document.getElementById("formCadastro").addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const especialidade = document.getElementById("especialidade").value;
    const file = document.getElementById('file').files[0];

    const formData = new FormData();
    formData.append("nome", nome);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("especialidade", especialidade);
    formData.append("file", file);

    try {
        const response = await fetch("http://localhost:3004/api/salvar/profissional", {
            method: "POST",
            body: formData
        });

        const result = await response.json();
        if (result.success) {
            window.location.href = "../login/login_profissional.html";
        } else {
            alert("Falha ao cadastrar. Verifique suas credenciais.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
}
