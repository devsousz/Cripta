const entrada = document.querySelector(".entrada__msg");
const saida = document.querySelector(".saida__msg");
const botaoCrip = document.querySelector(".botoes__crip");
const botaoDecrip = document.querySelector(".botoes__decrip");
const botaoCopiar = document.querySelector(".saida__cop");

function criptografar() {
    const textoEncrip = encriptar(entrada.value);
    saida.value = textoEncrip;
    entrada.value = "";
    verificarTexto();
}

function encriptar(stringEncripta) {
    const matrizCodigo = [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncripta = stringEncripta.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncripta.includes(matrizCodigo[i][0])) {
            stringEncripta = stringEncripta.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncripta;
}

function descriptografar() {
    const textoDecrip = decriptar(entrada.value);
    saida.value = textoDecrip;
    entrada.value = "";
    verificarTexto();
}

function decriptar(stringDecrip) {
    const matrizCodigo = [["e", "enter"], ["i", "ines"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecrip = stringDecrip.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDecrip.includes(matrizCodigo[i][1])) {
            stringDecrip = stringDecrip.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDecrip;
}

function copiar() {
    entrada.value = saida.value;
    saida.value = "";
    verificarTexto();
}
saida.addEventListener('input', verificarTexto);

function verificarTexto() {
    if (saida.value.trim() !== '') {
        saida.style.backgroundImage = 'none';
        botaoCopiar.style.display = 'block';
    } else {
        saida.style.backgroundImage = 'url("img/boneca.png")';
        botaoCopiar.style.display = 'none';
    }
}

botaoCrip.addEventListener('click', criptografar);
botaoDecrip.addEventListener('click', descriptografar);
botaoCopiar.addEventListener('click', copiar);

verificarTexto();
