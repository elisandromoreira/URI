const input = require('fs').readFileSync('./file1763.txt', 'utf8');
// Armazena cada linha(país em uma posição do array)
const lines = input.split('\n');

// Percorre o array
for (let i = 0; i < lines.length; i++) {
  // Armazena o elemento do array de indice = i
  let country = lines[i];

  // Testa o elemento country
  switch (country) {
    // Caso o elemento seja igual a um dos casos
    case 'brasil':
    case 'portugal':
      // imprime no console a saudação correspondente
      console.log('Feliz Natal!');
      break;

    case 'alemanha':
      console.log('Frohliche Weihnachten!');
      break;

    case 'austria':
      console.log('Frohe Weihnacht!');
      break;

    case 'coreia':
      console.log('Chuk Sung Tan!');
      break;

    case 'espanha':
    case 'argentina':
    case 'chile':
    case 'mexico':
      console.log('Feliz Navidad!');
      break;

    case 'grecia':
      console.log('Kala Christougena!');
      break;

    case 'estados-unidos':
    case 'inglaterra':
    case 'australia':
    case 'antardida':
    case 'canada':
      console.log('Merry Christmas!');
      break;

    case 'italia':
    case 'libia':
      console.log('Buon Natale!');
      break;

    case 'siria':
    case 'marrocos':
      console.log('Milad Mubarak!');
      break;

    case 'suecia':
      console.log('God Jul!');
      break;

    case 'turquia':
      console.log('Mutlu Noeller');
      break;

    case 'japao':
      console.log('Merii Kurisumasu!');
      break;

    case 'belgica':
      console.log('Zalig Kerstfeest!');
      break;

    case 'irlanda':
      console.log('Nollaig Shona Dhuit!');
      break;

    default:
      // imprime NOT FOUND como padrão, se não passar em nenhum dos casos acima
      console.log('--- NOT FOUND ---');
      break;
  }
}
