// ## Corrigir Valor Numérico **(1 ponto)**

// **Enunciado:**

// Crie a função corrigirValor, que recebe um valor e tenta convertê-lo para número. Se não for possível, retorne `"Valor inválido"`.

function corrigirValor(valor) {
  valor = Number
  if (valor !== Number){
    return('Valor inválido')
  }
  if (valor == Number){
    return(`O valor é ${valor}`)
  }
}

//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { corrigirValor };