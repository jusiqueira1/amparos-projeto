const chatBot = document.querySelector("#chat-messages");
const mensagem = document.getElementById("message");
const chatForm = document.querySelector(".user-input");

const maxMessages = 3;
const maxChatHeight = 500; 
let messageCount = 0;

mensagem.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) { 
        e.preventDefault(); 
        enviarMensagem(); 
    }
});

chatForm.onsubmit = async function (e) {
    e.preventDefault();
    enviarMensagem(); 
};

function enviarMensagem() {
    let prompt = mensagem.value.trim();

    if (prompt === "") return; 

    adicionarMensagemAoChat(criarChat(prompt), "user");

    messageCount++;

    let data = { prompt };
    fetch(`http://localhost:3004/api/chat`, {
        method: "POST",
        headers: { "Content-type": "application/json;charset=UTF-8" },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(content => {
            if (content.data) {
                criarResposta(content.data);
            } else {
                console.log("Erro ao obter resposta da API.");
            }
        })
        .catch(error => {
            console.error("Erro na requisição:", error);
        });

    mensagem.value = "";

    verificarAlturaChat();

    if (messageCount >= maxMessages) {
        ocultarBotoesDeAjuda();
        messageCount = 0; 
    }
}

function adicionarMensagemAoChat(html, tipo) {
    const messageHTML = `<div class="${tipo}-message">${html}</div>`;
    chatBot.innerHTML += messageHTML;
    chatBot.scrollTop = chatBot.scrollHeight; 
}

function criarChat(msg) {
    return `<p>${msg}</p>`;
}

function criarResposta(retorno) {
    let formattedResponse = retorno.replace(/\*\*/g, '<br><br>').replace(/\*/g, '<br>');
    const respostaHTML = `<p>${formattedResponse}</p>`;

    setTimeout(function () {
        adicionarMensagemAoChat(respostaHTML, "bot");
    }, 1000);
}

function levenshteinDistance(s1, s2) {
    let m = s1.length, n = s2.length;
    let d = [];

    for (let i = 0; i <= m; i++) {
        d[i] = [i];
    }
    for (let j = 0; j <= n; j++) {
        d[0][j] = j;
    }
    for (let j = 1; j <= n; j++) {
        for (let i = 1; i <= m; i++) {
            if (s1[i - 1] === s2[j - 1]) {
                d[i][j] = d[i - 1][j - 1];
            } else {
                d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + 1);
            }
        }
    }
    return d[m][n];
}

function ocultarBotoesDeAjuda() {
    var botoesDeAjuda = document.querySelectorAll(".question");
    for (let i = 0; i < botoesDeAjuda.length; i++) {
        botoesDeAjuda[i].style.display = "none";
    }
}

function verificarSemelhancaPergunta(mensagem) {
    const perguntasFrequentes = ["Como posso obter ajuda?", "Onde encontro suporte?", "Quais são os recursos disponíveis?"];
    const limiteSimilaridade = 3; 

    for (let i = 0; i < perguntasFrequentes.length; i++) {
        let distancia = levenshteinDistance(mensagem, perguntasFrequentes[i]);
        if (distancia <= limiteSimilaridade) {
            ocultarBotoesDeAjuda();
            console.log("Pergunta semelhante encontrada, ocultando botões de ajuda.");
            break;
        }
    }
}

function verificarAlturaChat() {
    if (chatBot.scrollHeight > maxChatHeight) {
        ocultarBotoesDeAjuda();
        console.log("Limite de altura do chat excedido, ocultando botões de ajuda.");
    }
}
