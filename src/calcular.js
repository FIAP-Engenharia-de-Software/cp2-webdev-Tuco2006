// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  
}
function somaDoisNumeros(numero1, numero2 = 0) {
  if (numero1 && numero2 == NaN){
    return('Erro: parâmetros inválidos')
  }
  let resultado = numero1 + numero2
  if (resultado !== somaDoisNumeros){
    return('Erro: operação inválida')
  }
  console.log(resultado) 
  return(resultado)
}
function subtraiDoisNumeros(numero1, numero2 = 0) {
  if (numero1 && numero2 == NaN){
    return('Erro: parâmetros inválidos')
  }
  let resultado = numero1 - numero2
  if (resultado !== subtraiDoisNumeros){
    return('Erro: operação inválida')
  }
  console.log(resultado) 
  if (resultado == NaN){
    return('Erro: divisão por zero')
  }
}
function multiplicaDoisNumeros(numero1, numero2 = 0) {
  if (numero1 && numero2 == NaN){
    return('Erro: parâmetros inválidos')
  }
  let resultado = numero1 * numero2
  if (resultado !== multiplicaDoisNumeros){
    return('Erro: operação inválida')}
  console.log(resultado) 
}

function divideDoisNumeros(numero1, numero2 = 0) {
  if (numero1 && numero2 == NaN){
    return('Erro: parâmetros inválidos')
  }

  let resultado = numero1 / numero2
  if (resultado !== divideDoisNumeros){
    return('Erro: operação inválida')}

  console.log(resultado) 
  if (numero1 == 0){
    return('Erro: divisão por zero')
  }
  if (numero2 == 0){
    return('Erro: divisão por zero')
  }
  return(resultado)
}



//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };