const chatBot = document.querySelector("#chat-messages");
const mensagem = document.getElementById("message");
const chatForm = document.querySelector(".user-input");

chatForm.onsubmit = async function(e) {
    e.preventDefault();
    let prompt = mensagem.value; 

    let data = { prompt };
    try {
        const response = await fetch(`http://localhost:3004/api/chat`, {
            method: "POST",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(data),
        });

        let content = await response.json();

        if (content.data) {
            let retorno = content.data;
            criarResposta(retorno);
        } else {
            console.log("Erro ao obter resposta da API.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
    }
}

function criarChat(msg) {
    mensagem.value = ""; 
    return `
        <div class="user-message">
            <p>${msg}</p>
        </div>
    `;
}

function criarResposta(retorno) {
    let prompt = retorno.replace(/\*\*/g, '<br><br>');
    prompt = prompt.replace(/\*/g, '<br>'); 
    const respostaHTML = `
        <div class="bot-message">
            <p>${prompt}</p>
        </div>
    `;
    texto(respostaHTML);
}

function texto(respostaHTML) {
    chatBot.innerHTML += criarChat(mensagem.value); 
    setTimeout(function() {
        chatBot.innerHTML += respostaHTML; 
    }, 1000);

    chatBot.scrollTop = chatBot.scrollHeight;
}
