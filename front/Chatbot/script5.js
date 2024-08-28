// Seleciona elementos da página
const chatBot = document.querySelector("#chat-messages");
const button = document.querySelector("#send-btn");
const mensagem = document.getElementById("message");
const chatForm = document.querySelector(".user-input");

// Função para enviar a mensagem e receber resposta da API Gemini
chatForm.onsubmit = async function(e) {
    e.preventDefault();
    enviarMensagem();
};

async function enviarMensagem() {
    let prompt = mensagem.value;

    // Preparando os dados para enviar à API
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

// Função para criar a mensagem do usuário no chat
function criarChat(msg) {
    mensagem.value = ""; // Limpa o campo de mensagem após o envio
    return `
        <div class="user-message">
            <p>${msg}</p>
        </div>
    `;
}

// Função para criar a resposta da API no chat
function criarResposta(retorno) {
    let prompt = retorno.replace(/\*\*/g, '<br><br>');
    prompt = prompt.replace(/\*/g, '<br>'); 
    const respostaHTML = `
        <div class="bot-message">
            <p>${prompt}</p>
        </div>
    `;
    texto(respostaHTML); // Passa a resposta para a função texto
}

// Função para exibir a mensagem e a resposta no chat
function texto(respostaHTML) {
    chatBot.innerHTML += criarChat(mensagem.value); // Adiciona a mensagem do usuário
    setTimeout(function() {
        chatBot.innerHTML += respostaHTML; // Adiciona a resposta após um atraso
    }, 1000);

    // Rolar o chat para o final
    chatBot.scrollTop = chatBot.scrollHeight;
}

// Evento para o botão enviar
button.addEventListener("click", enviarMensagem);
