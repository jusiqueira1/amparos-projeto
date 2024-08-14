var receivedOi = false;
var receivedAjudaImediata = false;
var receivedPrecisoDeAjuda = false;
var receivedDenuncia = false;
var receivedLigar = false;
var receivedEsboço = false;

function enviarMensagem() {
  var userInput = document.getElementById("message").value.toLowerCase();
  var chatBox = document.getElementById("chat-messages");
  var userMessageElement = createMessageElement("Você", userInput);
  chatBox.appendChild(userMessageElement);

  ocultarBotoesDeAjuda();

  var correctedInput = correctSpelling(userInput);
  if (correctedInput === "oi") {
    receivedOi = true;
    receivedAjudaImediata = false;
    receivedPrecisoDeAjuda = false;
    receivedDenuncia = false;
    var botResponseElement = createMessageElement("Bot", "Olá! No que posso te ajudar?");
    chatBox.appendChild(botResponseElement);
  } else if (receivedOi && correctedInput === "preciso de ajuda") {
    receivedPrecisoDeAjuda = true;
    receivedAjudaImediata = false;
    receivedDenuncia = false;
    var botResponseElement = createMessageElement("Bot", "Certo! Você gostaria de uma ajuda imediata ou uma denúncia?");
    chatBox.appendChild(botResponseElement);
  } else if (receivedPrecisoDeAjuda && correctedInput === "denúncia") {
    receivedDenuncia = true;
    receivedAjudaImediata = false;
    var botResponseElement = createMessageElement("Bot", "Você escolheu denunciar. Você gostaria de escrever um esboço de sua denúncia ou gostaria de ligar para a central de atendimento?");
    chatBox.appendChild(botResponseElement);

  } else if (receivedDenuncia && correctedInput === "ligar") {
    receivedDenuncia = false;
    receivedAjudaImediata = false;
    receivedLigar = true;
    var botResponseElement = createMessageElement("Bot", "Você gostaria de uma ligação.Ligue para o 180 ou (51) 99788-3212");
    chatBox.appendChild(botResponseElement);


  } else if (receivedLigar && correctedInput === "esboço") {
    receivedLigar = false;
    receivedEsboço = true;
    var botResponseElement = createMessageElement("Bot", "Você escolheu realizar um esboço de sua denuncia.Organize suas ideias aqui");
    chatBox.appendChild(botResponseElement);

  } else {
    var botResponseElement = createMessageElement("Bot", "Desculpe, não entendi.");
    chatBox.appendChild(botResponseElement);
  }

  document.getElementById("message").value = "";
}

function createMessageElement(sender, message) {
  var messageElement = document.createElement("div");
  messageElement.className = "chat-message";
  messageElement.textContent = sender + ": " + message;
  return messageElement;
}

function correctSpelling(input) {
  var keywords = ["oi", "preciso de ajuda", "denúncia", "ligar", "esboço"];
  var minDistance = Infinity;
  var correctedWord = null;

  for (var i = 0; i < keywords.length; i++) {
    var keyword = keywords[i];
    var distance = levenshteinDistance(input, keyword);
    if (distance < minDistance) {
      minDistance = distance;
      correctedWord = keyword;
    }
  }

  if (minDistance <= 4) {
    return correctedWord;
  } else {
    return input; // Retornar a entrada original se a correção não estiver no limite de distância
  }
}

function levenshteinDistance(s1, s2) {
  var m = s1.length, n = s2.length;
  var d = [];
  for (var i = 0; i <= m; i++) {
    d[i] = [i];
  }
  for (var j = 0; j <= n; j++) {
    d[0][j] = j;
  }
  for (var j = 1; j <= n; j++) {
    for (var i = 1; i <= m; i++) {
      if (s1[i - 1] == s2[j - 1]) {
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
  for (var i = 0; i < botoesDeAjuda.length; i++) {
    botoesDeAjuda[i].style.display = "none";
  }
}

// Evento de pressionar Enter
document.getElementById('message').addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) { // Código da tecla Enter
    enviarMensagem();
  }
});


