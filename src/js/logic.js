function clean() {
  document.getElementById("principal").value = "";
  document.getElementById("secundaria").value = ""; // Limpa o histórico também se desejar
}

function cleanHistorico() {
  document.getElementById("secundaria").value = "";
}

function back() {
  let apagar = document.getElementById("principal").value;
  document.getElementById("principal").value = apagar.substring(0, apagar.length - 1);
}

function insert(num1) {
  let n1 = document.getElementById("principal").value;
  document.getElementById("principal").value = n1 + num1;
}

function calcular() {
  let expressao = document.getElementById("principal").value;
  let campoSecundaria = document.getElementById("secundaria");
  let campoPrincipal = document.getElementById("principal");

  if (expressao) {
    try {
      // 1. Envia a conta atual para o visor secundário (com o sinal de =)
      campoSecundaria.value = expressao + " =";

      // 2. Trata os símbolos 'x' para '*' antes do eval
      let expressaoTratada = expressao.replace(/x/g, "*").replace(/%/g, "/100");

      // 3. Atualiza o visor principal com o resultado final
      campoPrincipal.value = eval(expressaoTratada);
    } catch (erro) {
      campoPrincipal.value = "Erro";
    }
  } else {
    campoPrincipal.value = "0";
  }
}
