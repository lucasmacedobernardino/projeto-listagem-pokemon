const img = document.getElementById('imagem-botao')
const body = document.body
document.getElementById('alterarTema').addEventListener(('change'), (e)=>{
    const checkbox = e.target
    img.src = checkbox.checked == true ? "./src/imagens/moon.png": "./src/imagens/sun.png";
    body.style.backgroundColor = checkbox.checked == true ? "rgb(36, 36, 36)" : "rgba(239, 239, 239, 0.735)"
})
