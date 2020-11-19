/* Para testar no URI
 ** var input = require('fs').readFileSync('/dev/stdin', 'utf8');
 ** var lines = input.split('\n'); */

const input = require('fs').readFileSync('./file.txt', 'utf8');
const lines = input.split('\n');

// Armazena o número de casos de testes
const casos = lines.shift();

//Inicializa a variável contador
let contador;

// Para cada caso de testes realiza o seguinte processo:
for (let i = 0; i < casos; i++) {
  // Remove a linha de Total de Estudantes por caso
  lines.shift();
  // Armazena as notas por caso de teste(linha)
  let notas = lines.shift();

   // Transforma cada linha em um array e faz um cast para transformar cada item do array em um número;
  let notasForaDeOrdem = notas.split(" ").map((x) => Number(x));
  
  //Utiliza o método sort() para ordenar o array do maior para o menor e armazena o resultado em um novo array 
  let notasOrdenadas = [...notasForaDeOrdem].sort((a, b) => b - a);

  contador = 0;

// Sempre que a ordem não for trocada incrementa o contador
  for (let j = 0; j < notasForaDeOrdem.length; j++) {
    if (notasForaDeOrdem[j] === notasOrdenadas[j]) {
      contador++;
    }
  }

  console.log(contador);
}