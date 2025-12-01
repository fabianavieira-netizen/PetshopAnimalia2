document.addEventListener("DOMContentLoaded", function () {
// Data atual (na página inicial)
const spanData = document.getElementById("dataAtual");
if (spanData) {
const hoje = new Date();
spanData.textContent = hoje.toLocaleDateString("pt-BR");
}

// Ano atual (no footer)
const spanAno = document.getElementById("anoAtual");
if (spanAno) {
spanAno.textContent = new Date().getFullYear();
}

// Lógica de tele-busca no cadastro
const radioTelebusca = document.getElementById("metodoTelebusca");
const radioEntrega = document.getElementById("metodoEntrega");
const grupoEnderecoBusca = document.getElementById("grupoEnderecoBusca");
const inputEnderecoBusca = document.getElementById("enderecoBusca");

function atualizarEnderecoBusca() {
if (!grupoEnderecoBusca || !inputEnderecoBusca) return;

if (radioTelebusca && radioTelebusca.checked) {
grupoEnderecoBusca.classList.remove("d-none");
inputEnderecoBusca.setAttribute("required", "required");
} else {
grupoEnderecoBusca.classList.add("d-none");
inputEnderecoBusca.removeAttribute("required");
inputEnderecoBusca.value = "";
}
}

if (radioTelebusca) radioTelebusca.addEventListener("change", atualizarEnderecoBusca);
if (radioEntrega) radioEntrega.addEventListener("change", atualizarEnderecoBusca);

// Resumo simples do agendamento (na página de cadastro)
const form = document.getElementById("formCadastro");
const resumo = document.getElementById("resumoAgendamento");

if (form && resumo) {
form.addEventListener("submit", function (e) {
e.preventDefault();

const nomeCliente = document.getElementById("nomeCliente").value;
const nomePet = document.getElementById("nomePet").value;
const servico = document.getElementById("servico").value;
const data = document.getElementById("dataAgendamento").value;
const hora = document.getElementById("horaAgendamento").value;
const metodo = document.querySelector("input[name='metodoAgendamento']:checked")?.value || "";

resumo.classList.remove("d-none");
resumo.textContent =
"Agendamento realizado para " +
nomePet +
" (" +
servico +
") no dia " +
data +
" às " +
hora +
" - Método: " +
metodo +
". Cliente: " +
nomeCliente +
".";
});
}
});
