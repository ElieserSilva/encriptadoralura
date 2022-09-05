

const dic_decrypLetter = [
    "a", "e", "i", "o", "u"
];
const dic_encrypLetter = [
    "ai", "enter", "imes", "ober", "ufat"
];

function encrypText(text) {
    let result = text;

    for (let i = 0; i < dic_encrypLetter.length; i++) {
        result = result.replaceAll(dic_decrypLetter[i], dic_encrypLetter[i]);
    }

    return result
}

function decrypText(text) {
    let result = text;

    for (let i = dic_decrypLetter.length; i >= 0; i--) {
        result = result.replaceAll(dic_encrypLetter[i], dic_decrypLetter[i]);
    }

    return result
}

function mostrarContenido(mostrar = true){

    if(mostrar){
        document.forms.resultado.classList.add('hidden');
        document.querySelector('.content').classList.remove('hidden');
    }else{
        document.forms.resultado.classList.remove('hidden');
        document.querySelector('.content').classList.add('hidden');
    }
}


document.addEventListener('DOMContentLoaded', loadPage);

function loadPage(e) {

    let stateEncrypt = 0
    let inputCaptura = document.forms.captura.textoAencriptar;
    let inputResultado = document.forms.resultado.textoEncriptado;

    document.forms.captura.querySelectorAll('button')[0].addEventListener('click', function (event) {
        stateEncrypt = 0;
    })

    document.forms.captura.querySelectorAll('button')[1].addEventListener('click', function (event) {
        stateEncrypt = 1;
    })

    document.forms.captura.addEventListener('submit', function (event) {
        event.preventDefault();

        let captura = inputCaptura.value;

        if (captura.length < 1) return mostrarContenido(true);

        if (!stateEncrypt) {
            inputResultado.value = encrypText(inputCaptura.value)
            mostrarContenido(false);
        } else {
            inputResultado.value = decrypText(inputCaptura.value)
            mostrarContenido(false);
        }
    })

    document.forms.resultado.addEventListener('submit', function (event) {
        event.preventDefault();
        
    })
    
    document.forms.resultado.addEventListener('submit', function (event) {
        event.preventDefault();
        inputResultado.focus();
        document.execCommand("selectAll");
        document.execCommand("copy")
    })
}