let boxInText = document.querySelector(".box-in-text");
let btnEncrypt = document.querySelector(".btn-encrypt");
let btnDecrypt = document.querySelector(".btn-decrypt");
let boxOutText= document.querySelector(".box-out-text");
let btnCopy = document.querySelector(".btn-copy");


function encrypt(){
    if (boxInText.value != ""){
        let lowText = boxInText.value.toLowerCase();
        let textOut = lowText.replaceAll("a", "ai")
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");

        boxOutText.value = textOut;

        document.querySelector(".temporary-msg").style.display = "none";
        document.querySelector(".temporary-img").style.display = "none";
        document.querySelector(".btn-copy").style.display = "block";
    }else{
        alert("Digite um texto!")
    }
}

function decrypt(){
    if (boxInText.value != ""){
        let lowText = boxInText.value.toLowerCase();
        let textOut = lowText.replaceAll("ai", "a")
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

        boxOutText.value = textOut;

        document.querySelector(".temporary-msg").style.display = "none";
        document.querySelector(".temporary-img").style.display = "none";
        document.querySelector(".btn-copy").style.display = "block";
    }else{
        alert("Digite um texto!")
    }
}

function copy(){
    let content = document.querySelector(".box-out-text").value;
    navigator.clipboard.writeText(content);
    alert("Texto copiado!");
}

btnEncrypt.onclick = encrypt;
btnDecrypt.onclick = decrypt;
btnCopy.onclick = copy;