
(() => {
    btnEncripta.addEventListener('click', encriptar);
    btnDesencripta.addEventListener('click', desencriptar);
    btnCopia.addEventListener('click', copiarTexto);

}
)()

function encriptar() {
    let texto = document.querySelector("#tex1").value;
    texto = texto.toLowerCase();
    let textoEncriptado = texto.replace(/e/g, 'enter');
    textoEncriptado = textoEncriptado.replace(/a/g, 'ai');
    textoEncriptado = textoEncriptado.replace(/i/g, 'imes');
    textoEncriptado = textoEncriptado.replace(/o/g, 'ober');
    textoEncriptado = textoEncriptado.replace(/u/g, 'ufat');
    
    document.querySelector("#tex2").value = textoEncriptado;
    resultado.innerHTML = textoEncriptado;
  }

  function desencriptar() {
    let texto = document.querySelector("#tex1").value;
    texto = texto.toLowerCase();
    let textoEncriptado = texto.replace(/enter/g, 'e');
    textoEncriptado = textoEncriptado.replace(/ai/g, 'a');
    textoEncriptado = textoEncriptado.replace(/imes/g, 'i');
    textoEncriptado = textoEncriptado.replace(/ober/g, 'o');
    textoEncriptado = textoEncriptado.replace(/ufat/g, 'u');
    
    document.querySelector("#tex2").value = textoEncriptado;
    resultado.innerHTML = textoDesencriptado;
  }

  function copiarTexto(){
    let textoCopiado = document.querySelector("#tex2").value;
    document.querySelector("#tex1").value = textoCopiado;
  }