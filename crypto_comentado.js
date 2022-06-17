function crypt(msg, separa) {
    // aleatóriedade dos resultados
    const numeroA = Math.floor(Math.random() * 1000 + 2);
    const numeroB = 100;
    const numeroC = Math.floor(Math.random() * 500 + 1);
    const d = -numeroB + numeroC * numeroA
    
    // Transformando a string em um array de letras
    let phrase = msg.split("");

    // Loop para passar em cada um dos itens do array
    for (let i = 0; i < phrase.length; i++) {
        // Transformando cada letra em um decimal de ASCII
        // e multiplicando pela aletoriedade
        phrase[i] = (phrase[i].charCodeAt(0) * d);

        // Adicionando a separa separadora a cada um dos
        // itens do array (letras)
        phrase[i] += separa;
    }

    // Adicionando a aleatoriedade ao ultimo elemento do array
    phrase.push(d);

    // Variável de resposta
    let output = "";
    
    // Loop adicionando os elementos do array como string
    for (let i = 0; i < phrase.length; i++) {
        output += phrase[i];
        // output = output + phrase[i]
    }

    // Retorna a mensagem criptografada
    return output;
}

function decrypt(cypher, separa) {
    // Forço a separa a virar uma string
    let h = String(separa)
    // Uso a separa para dividir a string em um array
    const msg = cypher.split(h);

    //Removeu o ultimo item do array e guardou em "d"
    const d = msg.pop();

    // Passando por cada um dos elementos e:
    // - dividindo pela aletoriedade
    // - transformando de ASCII para caracteres
    for (let i = 0; i < msg.length; i++) {
        msg[i] = String.fromCharCode(parseInt(msg[i]) / d);
    }

    // Defininindo um uma saída no formato de string
    let output = "";

    // Loop concatenando a minha mensagem
    for (let i = 0; i < msg.length; i++) {
        output += msg[i];
    }

    // Retornando a mensagem descriptografada
    return output;
}

const phrase = "Um teste, so para deixar a frase longa. Sabe? Aquela preguiça de digitar?";

//muita malícia, para binários
let pass = crypt(phrase.toString(2), "O1");

console.log(pass);


let solve = decrypt(pass.toString(2), "O1")

console.log(solve);