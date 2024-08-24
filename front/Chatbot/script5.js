var estadoConversa = 'inicio';

function enviarMensagem() {
  var userInput = document.getElementById("message").value.toLowerCase();
  var chatBox = document.getElementById("chat-messages");
  var userMessageElement = createMessageElement("Você", userInput);
  chatBox.appendChild(userMessageElement);

  ocultarBotoesDeAjuda();

  var correctedInput = correctSpelling(userInput);

  var botResponseElement = null;

  switch (estadoConversa) {
    case 'inicio':
      if (correctedInput === "oi") {
        estadoConversa = 'saudacao';
        botResponseElement = createMessageElement("Bot", "Olá! No que posso te ajudar?");
      } else {
        botResponseElement = createMessageElement("Bot", "Desculpe, não entendi. Pode começar com um 'oi'?");
      }
      break;

    case 'saudacao':
      if (correctedInput === "preciso de ajuda") {
        estadoConversa = 'ajuda';
        botResponseElement = createMessageElement("Bot", "Certo! Você gostaria de uma ajuda imediata ou uma denúncia?");
      } else {
        botResponseElement = createMessageElement("Bot", "Desculpe, não entendi. Você precisa de ajuda ou outra coisa?");
      }
      break;

    case 'ajuda':
      if (correctedInput === "ajuda imediata") {
        estadoConversa = 'ajuda_imediata';
        botResponseElement = createMessageElement("Bot", "Que tipo de ajuda você gostaria? Polícia, Hospital ou Centro Jacobina?");
      } else if (correctedInput === "denúncia") {
        estadoConversa = 'denuncia';
        botResponseElement = createMessageElement("Bot", "Você escolheu denunciar. Você gostaria de escrever um esboço de sua denúncia ou gostaria de ligar para a central de atendimento?");
      } else {
        botResponseElement = createMessageElement("Bot", "Desculpe, não entendi. Você gostaria de ajuda imediata ou fazer uma denúncia?");
      }
      break;

    case 'ajuda_imediata':
      if (correctedInput === "polícia" || correctedInput === "policia") {
        botResponseElement = createMessageElement("Bot", "Certo, ligue para o 190 para ter sua ajuda imediata ou acione nosso botão do pânico.");
      } else if (correctedInput === "hospital") {
        botResponseElement = createMessageElement("Bot", "Certo, ligue para o hospital mais próximo de você ou para o 192.");
      } else if (correctedInput === "centro jacobina") {
        botResponseElement = createMessageElement("Bot", "Certo, ligue para o 99788-3212 para receber maior apoio emocional.");
        estadoConversa = 'apoio_emocional'; // Mudar para o estado de apoio emocional
      } else {
        botResponseElement = createMessageElement("Bot", "Desculpe, não entendi. Você gostaria de ajuda da Polícia, Hospital ou Centro Jacobina?");
      }
      break;

    case 'apoio_emocional':
      if (correctedInput === "obrigada") {
        botResponseElement = createMessageElement("Bot", "Você gostaria de realizar algum esboço de denúncia?");
        estadoConversa = 'esboco_desejo'; // Mudar para o estado de desejo de esboço
      } else {
        botResponseElement = createMessageElement("Bot", "Desculpe, não entendi. Por favor, diga 'obrigada' se você quiser encerrar ou 'realizar esboço' se você deseja fazer um esboço.");
      }
      break;

    case 'esboco_desejo':
      if (correctedInput === "sim") {
        botResponseElement = createMessageElement("Bot", "Você escolheu realizar um esboço de sua denúncia. Organize suas ideias aqui.");
        estadoConversa = 'esboco'; // Mudar para o estado de esboço
      } else if (correctedInput === "não" || correctedInput === "não, era isso") {
        botResponseElement = createMessageElement("Bot", "Vou encerrar nossa conversa. Qualquer dúvida, estamos à disposição!");
        estadoConversa = 'inicio'; // Voltar ao início após encerrar
      } else {
        botResponseElement = createMessageElement("Bot", "Desculpe, não entendi. Você gostaria de realizar um esboço ou encerrar a conversa?");
      }
      break;

    case 'esboco':
      if (correctedInput === "ok, obrigada") {
        botResponseElement = createMessageElement("Bot", "Esperamos que esse ambiente tenha feito você refletir e se sentir acolhida. Vou encerrar nossa conversa. Qualquer dúvida, estamos à disposição!");
        estadoConversa = 'encerramento'; // Mudar para o estado de encerramento
      } else {
        botResponseElement = createMessageElement("Bot", "Você pode continuar organizando seu esboço ou digitar 'ok, obrigada' para encerrar.");
      }
      break;

    case 'encerramento':
      if (correctedInput === "não" || correctedInput === "não, era isso") {
        botResponseElement = createMessageElement("Bot", "Vou encerrar nossa conversa. Qualquer dúvida, estamos à disposição!");
        estadoConversa = 'inicio'; // Voltar ao início após encerrar
      } else {
        botResponseElement = createMessageElement("Bot", "Desculpe, não entendi. Algo mais que eu possa ajudar?");
      }
      break;

    default:
      botResponseElement = createMessageElement("Bot", "Desculpe, não entendi.");
  }

  if (botResponseElement) {
    chatBox.appendChild(botResponseElement);
  }

  document.getElementById("message").value = "";
  chatBox.scrollTop = chatBox.scrollHeight; // Manter a rolagem para baixo
}

function createMessageElement(sender, message) {
  var messageElement = document.createElement("div");
  messageElement.className = "chat-message";
  messageElement.textContent = sender + ": " + message;
  return messageElement;
}

function correctSpelling(input) {
  var keywords = ["oi", "olá", "preciso de ajuda", "denúncia", "ajuda imediata", "polícia", "policia", "hospital", "centro jacobina", "esboço", "obrigada", "sim", "não", "não, era isso", "ok, obrigada"];
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

  return minDistance <= 4 ? correctedWord : input;
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
      if (s1[i - 1] === s2[j - 1]) {
        d[i][j] = d[i - 1][j - 1];
      } else {
        d[i][j] = Math.min(d[i - 1][j] + 1, Math.min(d[i][j - 1] + 1, d[i - 1][j - 1] + 1));
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
