document.getElementById("formLogin").addEventListener("submit", logar);

async function logar(event) {
    event.preventDefault();

    // const profissionalLogin = document.getElementById("profissionalLogin").value;
    const email = document.getElementById("emailLogin").value;
    const password = document.getElementById("passwordLogin").value;

    // const data = { profissionalLogin, email, password };

    const data = { email, password };

    try {
        const response = await fetch("http://localhost:3004/api/login/profissional", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();
        if (result.success) {
          
            const { id, perfil } = result.data;
            localStorage.setItem("profissional", JSON.stringify(result.data));
            localStorage.setItem("perfil", perfil);
            localStorage.setItem(perfil === 'admin' ? "id_profissional" : "id_usuaria", id);

            
            window.location.href = "../inicio/inicio.html";
        } else {
            alert("Falha ao logar. Verifique suas credenciais.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
}