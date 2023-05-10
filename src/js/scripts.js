const botao = document.getElementById("botao-alterar-tema");
const imagemBotao = document.querySelector('.imagem-botao')
botao.addEventListener('click', () => {  
    if (document.body.style.background == "gray" ) {
        document.body.style.background = "white";
        imagemBotao.setAttribute("src", "./src/imagens/sun.png");
        
    } else {
        document.body.style.background = "gray";
        imagemBotao.setAttribute("src", "./src/imagens/moon.png");
    }
});