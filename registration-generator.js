const namesJSON = ["João", "José", "Allison", "Arthur", "Ana", "Alex", "Arlene", "Alberto", "Barry", "Bertha", "Bill", "Bonnie", "Bret", "Beryl", "Chantal", "Cristobal", "Claudette", "Charley", "Cindy", "Chris", "Dean", "Dolly", "Danny", "Danielle", "Dennis", "Debby", "Erin", "Edouard", "Erika", "Earl", "Emily", "Ernesto", "Felix", "Fay", "Fabian", "Frances", "Franklin", "Florence", "Gabielle", "Gustavo", "Grace", "Gaston", "Gert", "Gordon", "Humberto", "Hanna", "Henri", "Hermine", "Harvey", "Helene", "Iris", "Isidore", "Isabel", "Ivan", "Irene", "Isaac", "Jerry", "Josephine", "Juan", "Jeanne", "Jose", "Joyce", "Karen", "Kyle", "Kate", "Karl", "Katrina", "Kirk", "Lorenzo", "Lili", "Larry", "Lisa", "Lee", "Leslie", "Michelle", "Marco", "Mindy", "Maria", "Michael", "Noel", "Nana", "Nicholas", "Nicole", "Nate", "Nadine", "Olga", "Omar", "Odette", "Otto", "Ophelia", "Oscar", "Pablo", "Paloma", "Peter", "Paula", "Philippe", "Patty", "Rebekah", "Rene", "Rose", "Richard", "Rita", "Rafael", "Sebastien", "Sally", "Sam", "Shary", "Stan", "Sandy", "Tanya", "Teddy", "Teresa", "Tomas", "Tammy", "Tony", "Van", "Vicky", "Victor", "Virginie", "Vince", "Valerie", "Wendy", "Wilfred", "Wanda", "Walter", "Wilma", "William", "Kumiko", "Aki", "Miharu", "Chiaki", "Michiyo", "Itoe", "Nanaho", "Reina", "Emi", "Yumi", "Ayumi", "Kaori", "Sayuri", "Rie", "Miyuki", "Hitomi", "Naoko", "Miwa", "Etsuko", "Akane", "Kazuko", "Miyako", "Youko", "Sachiko", "Mieko", "Toshie", "Junko", "Silva", "Ash", "Jalmir", "Rafael", "Bruno", "Daniel", "Mariane", "Andre", "Diego"];
const familyNamesJSON = ["Cardoso", "Chagas", "Fernandes", "Santana", "Carvalho", "Martins", "Santos", "Boaventura", "Oliveira", "Moraes", "Leão", "Garcia", "Alves", "Costa", "Oliveira", "Martinez", "Novaes", "Oliveira", "Araújo", "Maia", "Vasconcelos", "Gonçalves", "Guimarães", "Menezes", "Sampaio", "Cavalcante", "Lacerda", "Mello", "Moraes", "Muniz", "Figueira", "Paes", "Lima", "Marques", "Duarte", "Vasconcelos", "Vieira", "Souza", "Soares", "Silva", "Duarte", "Morais", "Gomes", "Paiva", "Junqueira", "Queiroz", "Barreto", "Menezzes", "Campos", "Pilar", "Chaves", "Paris", "Lessa", "Galisteu", "Garcia", "Frota", "Araújo", "Xavier", "Ribeiro", "Rodrigues", "Freitas", "Pinheiro", "Moreira", "Dias", "Guimarães", "Nogueira", "Rocha", "Albuquerque", "Neves", "Bernardes", "Pereira", "Camargo", "Alencar", "Batista", "Andrade ", "Reis", "Amaral", "Barcellos", "Monteiro", "Barreto", "Frias", "Medeiros", "Gonçalves", "Ferrari", "Mesquita"];
const workSegmentJSON = ["Agência De Publicidade", "Alimentos", "Artigos Esportivos", "Autopeças", "Auditoria", "Consultoria", "Bancos De Varejo", "Bebidas Alcoólicas", "Bebidas Não-Alcoólicas", "Calçados", "Cartão De Crédito", "Cia Aérea", "Construção E Incorporação", "Construção Pesada", "Derivado De Petróleo", "Eletrodomésticos", "Eletroeletrônicos", "Equipamento De Telecomunicação", "Fabricante De Material De Construção", "Farmacêutico", "Fast Food", "Fiação E Tecelagem", "Fornecedores De Energia", "Hardware", "Higiene E Limpeza Doméstica", "Higiene Pessoal, Perfumaria E Cosméticos", "Logística", "Metalurgia E Siderurgia", "Montadora/Importadora De Automóveis", "Montadora/Importadora De Caminhões", "Operadora De Telefonia Fixa", "Operadora De Telefonia Móvel", "Papel E Celulose", "Petroquímica", "Previdência Privada", "Provedor De Internet", "Química", "Rede De Hotéis", "Varejo Eletroeletrônicos", "Varejo Material De Construção", "Varejo Supermercados", "Varejo Têxtil", "Seguradoras", "Software", "Vestuário E Confecção", "Contact Center", "Redes Sociais", "Mineração"];
const brazilianStatesJSON = { acronyms: ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"],
                              names: ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]};
const CEPsJSON = ["69905038", "69922215", "57325970", "57070528", "69095312", "69020022", "68908199", "68909134", "45310971", "45078618", "60835355", "60511200", "72543204", "72543204", "29306025", "29305602", "75806090", "74982460", "65071480", "65073560", "65916283", "38183187", "39408304", "79333160", "79826020", "78075866", "78715574", "66070660", "66830724", "58059402", "58034575", "50720165", "55150040", "64049484", "64027424", "83505040", "81930374", "24935475", "26290294", "59151500", "59073000", "59078570", "97110370", "91787568", "76824090", "76820268", "69313045", "69314619", "89215440", "88161332", "49045373", "49050563", "77001486", "77016412", "18400803", "18400803", "02841180", "03819130", "09980181", "16901430", "09172422", "11712330"];
const internetProvidersJSON = ["gmail.com", "yahoo.com.br", "bol.com.br", "msn.com", "ig.com.br", "globo.com", "oi.com.br", "pop.com.br", "r7.com.br", "folha.com.br", "uol.com", "outlook.com", "zoho.com", "mail.com", "gmx.com", "fastmail.com", "hushmail.com", "inbox.com", "zipmail.com.br", "limao.com.br", "espn.com"];
const charactersJSON = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\"", "|", ";", ":", "'", "\"", "<", ".", ">", "/", "?"];
const RGsJSON = ["911225341", "91.122.534-1", "403289440", "4.032.894-40", "418757896", "41.875.789-6", "2977269", "2.977.269", "429434121", "42.943.412-1"];
const creditCardFlagsJSON = ["visa", "mastercard", "master", "diners", "elo", "amex", "discover", "aura", "jcb", "hipercard"];

function generateRandomNumbers(maximumNumber) {
  let randomNumber = Math.round(Math.random() * maximumNumber);
  return randomNumber;
}

function generateRandomNumbersWithInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mod(dividend, divider) {
  return Math.round(dividend - (Math.floor(dividend / divider) * divider));
}

function choseRandomOption(list) {
  const i = generateRandomNumbers(list.length - 1);
  return list[i];
}

function generateDigits(amountOfDigits){
  const digits = [];
  for(let i = 1; i <= amountOfDigits; i++) {
    digits[i] = generateRandomNumbers(9);
  }
  return digits;
}

function calculateDigit (maxMultiplier, ...digits) {
  let digit = 0;
  let amountOfDigits = digits.length;
  let multiplier = 2;
  for (let i = amountOfDigits; i >= 1; i--) {
    multiplier = multiplier > maxMultiplier ? 2 : multiplier;
    digit += digits[i] * multiplier;
    multiplier++;
  }
  digit = 11 - (mod(digit, 11));
  return (digit < 10) ? digit : 0;
}

function printDocument(...digits) {
  let document = '';
  for(let i = 1; i < digits.length; i++) {
    document += digits[i];
  }
  return document;
}

function generateBrazilianCPF(hasMask = false) {
  const digits = generateDigits(9);
  let digit1 = calculateDigit(10, ...digits);
  let digit2 = calculateDigit(11, digit1, ...digits);
  let cpf = printDocument(...digits, digit1, digit2);
  if (hasMask) {
    cpf = '' + digits[1] + digits[2] + digits[3] + '.' + digits[4] + digits[5] +
      digits[6] + '.' + digits[7] + digits[8] + digits[9] + '-' + digit1 + digit2;
  }
  return cpf;
}

function generateBrazilianCNPJ(hasMask = false) {
  const amountOfDigits = 12;
  const digits = generateDigits(amountOfDigits);
  digits[9] = 0;
  digits[10] = 0;
  digits[11] = 0;
  digits[12] = 1;
  const digit1 = calculateDigit(9, ...digits);
  const digit2 = calculateDigit(9, ...digits, digit1);
  let cnpj = printDocument(...digits, digit1, digit2);
  if (hasMask) {
    cnpj = '' + digits[1] + digits[2] + '.' + digits[3] + digits[4] + digits[5] + '.' +
      digits[6] + digits[7] + digits[8] + '/' + digits[9] + digits[10] + digits[11] +
      digits[12] + '-'+ digit1 + digit2;
  }
  return cnpj;
}

function calculateFirstVerifyDigitTituloDeEleitor(digits){
  const sum1 = ((digits[1] * 2) + (digits[2] * 3) + (digits[3] * 4) + (digits[4] * 5) +
    (digits[5] * 6) + (digits[6] * 7) + (digits[7] * 8) + (digits[8] * 9));
  const part1 = parseInt((sum1 / 11));
  const part2 = (part1 * 11);
  let digit1 = (sum1 - part2);
  return (digit1 <= 9) ? digit1 : 0;
}

function calculateSecondVerifyDigitTituloDeEleitor(digits, digit1) {
  const sum2 = ((digits[9] * 7) + (digits[10] * 8) + (digit1 * 9));
  const part3 = parseInt(sum2 / 11);
  const part4 = (part3 * 11);
  let digit2 = (sum2  - part4);
  return (digit2 <= 9) ? digit2 : 0;
}

function generateBrazilianTituloDeEleitor(hasMask = false) {
  let digits = [];
  for(let i = 1; i <= 8; i++){
    const n = 9;
    digits[i] = generateRandomNumbers(n) % 9;
    digits[9] = generateRandomNumbers(n) % 2;
    digits[10] = generateRandomNumbers(n) % 8;
  }
  const digit1 = calculateFirstVerifyDigitTituloDeEleitor(digits);
  const digit2 = calculateSecondVerifyDigitTituloDeEleitor(digits, digit1);
  let tituloDeEleitor = printDocument(...digits, digit1, digit2);
  if (hasMask) {
    tituloDeEleitor = '';
    for(let i = 1; i <= 10; i++){
      tituloDeEleitor += numbers[i];
      if(i % 4 == 0) {
        tituloDeEleitor += " ";
      }
    }
    tituloDeEleitor += digit1 + digit2;
  }
  return tituloDeEleitor;
}

function generateName(){
	const names = namesJSON;
  const number = names.length - 1;
  const i = Math.round(Math.random() * number);
	return names[i];
}

function generateFamilyName(){
  const familyNames = familyNamesJSON;
  const i = generateRandomNumbers(familyNames.length - 1);
	return familyNames[i];
}

function generateWorkSegment(){
  const segments = workSegmentJSON;
	const i = generateRandomNumbers(segments.length - 1);
	return segments[i];
}

function generateRazaoSocial (name, familyName){
  const segment = generateWorkSegment();
	const companyName = name + " " + familyName;
	const type = ['MEI', 'ME', 'EPP', 'EI', 'EIRELI', 'LTDA', 'SA'];
	var i = generateRandomNumbers(type.length - 1);
	return companyName + " " + segment + " " + type[i];
}

function calculateDigitInscricaoEstadualSP (...digits) {
  let digit = digits[8] * 10 + digits[7] * 8 + digits[6] * 7 + digits[5] * 6 + digits[4] * 5 +
  digits[3] * 4 + digits[2] * 3 + digits[1] * 1;
  digit = 11 - (mod(digit, 11));
  return (digit < 10) ? digit : 0;
}

function generateInscricaoEstadual(inscricaoEstadual = 'Isento', hasMask = false) {
  const states = brazilianStatesJSON.acronyms;
  states.push('SPP');
  const randomIndex = generateRandomNumbers(states.length - 1);
  const companyState = states[randomIndex];
  let digits = [];
  let digit1 = 0;
  let digit2 = 0;
  switch(companyState) {
    case 'AC':
      digits = generateDigits(9);
      digits[1] = 0;
      digits[2] = 1;
      digit1 = calculateDigit(9, ...digits);
      digit2 = calculateDigit(9, digit1, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1, digit2);
      if (hasMask) {
          inscricaoEstadual =  '' + digits[1] + digits[2] + '.' + digits[3] + digits[4] +
          digits[5] + '.' + digits[6] + digits[7] + digits[8] + '.' + digits[9] + digits[10] +
          digits[11] + '-' + digit1 + digit2;
      }
      break;
    case 'AL':
      digits = generateDigits(8);
      digits[1]  = 2;
      digits[2]  = 4;
      if(digits[3] == 1) {
        digits[3] = 3;
      }
      else if(digits[3] == 2) {
        digits[3] = 5;
      }
      else if(digits[3] == 3) {
        digits[3] = 7;
      }
      else if(digits[3] == 4) {
        digits[3] = 8;
      }
      digit1 = calculateDigit(9, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1);
      break;
    case 'AP':
      digits = generateDigits(8);
      digits[1]  = 0;
      digits[2]  = 3;
      digit1 = calculateDigit(9, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1);
      break;
    case 'AM':
      digits = generateDigits(8);
      digit1 = calculateDigit(9, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1);
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + '.' + digits[3] + digits[4] +
          digits[5] + '.' + digits[6] + digits[7] + digits[8] + '-' + digit1;
      }
      break;
    case 'BA':
      digits = generateDigits(6);
      digit1 = calculateDigit(9, ...digits);
      digit2 = calculateDigit(9, digit1, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1, digit2);
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + '-' + digit1 + digit2;
      }
      break;
    case 'CE':
      digits = generateDigits(8);
      digit1 = calculateDigit(9, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1);
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + '-' + digit1;
      }
      break;
    case 'DF':
      digits = generateDigits(11);
      digits[1] = 0;
      digits[2] = 7;
      digit1 = calculateDigit(9, ...digits);
      digit2 = calculateDigit(9, digit1, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1, digit2);
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + '.' + digits[3] + digits[4] +
          digits[5] + '.' + digits[6] + digits[7] + digits[8] + '.' + digits[9] +
          digits[10] + digits[11] + '-' + digit1 + digit2;
      }
      break;
    case 'ES':
      digits = generateDigits(8);
      digit1 = calculateDigit(9, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1);
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + '-' + digit1;
      }
      break;
    case 'GO':
      digits = generateDigits(8);
      digit1 = calculateDigit(9, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1);
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + '.' + digits[3] + digits[4] + digits[5] +
          '.' + digits[6] + digits[7] + digits[8] + '-' + digit1;
      }
      break;
    case 'MA':
      digits = generateDigits(8);
      digits[1] = 1;
      digits[2] = 2;
      digit1 = calculateDigit(9, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1);
      break;
    case 'MS':
      digits = generateDigits(10);
      digit1 = calculateDigit(9, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1);
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + digits[9] + digits[10] + '-' + digit1;
      }
      break;
    case 'MT':
      digits = generateDigits(10);
      digit1 = calculateDigit(9, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1);
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + digits[9] + digits[10] + '-' + digit1;
      }
      break;
    case 'MG':
      break;
    case 'PA':
      digits = generateDigits(8);
      digit1 = calculateDigit(9, ...digits);
      inscricaoEstadual = printDocument(...digits, digit);
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + '-' + digit1;
      }
      break;
    case 'PB':
      digits = generateDigits(8);
      digit1 = calculateDigit(9, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1);
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + '-' + digit1;
      }
      break;
    case 'PR':
      digits = generateDigits(8);
      digit1 = calculateDigit(9, ...digits);
      digit2 = calculateDigit(7, digit1, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1, digit2);
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + '-' + digit1 + digit2;
      }
      break;
    case 'PE':
      digits = generateDigits(7);
      digit1 = calculateDigit(9, ...digits);
      digit2 = calculateDigit(9, digit1, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1, digit2);
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + '-' + digit1 + digit2;
      }
      break;
    case 'PI':
      digits = generateDigits(8);
      digit1 = calculateDigit(9, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1);
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + '-' + digit1;
      }
      break;
    case 'RJ':
      digits = generateDigits(8);
      digit1 = calculateDigit(7, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1);
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + '.' + digits[3] + digits[4] + digits[5] +
          '.' + digits[6] + digits[7] + '-' + digit1;
      }
      break;
    case 'RN':
      break;
    case 'RS':
      digits = generateDigits(9);
      digit1 = calculateDigit(9, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1);
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + '/' + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + digits[9] + digit1;
      }
      break;
    case 'RO':
      digits = generateDigits(13);
      digits[1] = 0;
      digits[2] = 7;
      digit1 = calculateDigit(9, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1);
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + digits[9] + digits[10] + digits[11] +
          digits[12] + digits[13] + '-' + digit1;
      }
      break;
    case 'RR':
      digits = generateDigits(8);
      for(let i = digits.length - 1; i >= 1; i++) {
        digit1 += digits[i] * i;
      }
      inscricaoEstadual = printDocument(...digits, digit1);
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + '-' + digit1;
      }
      break;
    case 'SC':
      digits = generateDigits(8);
      digit1 = calculateDigit(9, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1);
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + '.' + digits[4] + digits[5] +
          digits[6] + '.' + digits[7] + digits[8] + digit1;
      }
      break;
    case 'SP':
      digits = generateDigits(11);
      digit1 = calculateDigitInscricaoEstadualSP(...digits);
      digits[9] = digit1;
      digit2 = calculateDigit(11, ...digits);
      inscricaoEstadual = printDocument(...digits, digit2);
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + '.' + digits[4] + digits[5] +
          digits[6] + '.' + digits[7] + digits[8] + digit1 + '.' + digits[10] + digits[11] + digit2;
      }
      break;
    case 'SPP':
      digits = generateDigits(12);
      digits[1]  = 0;
      digit1 = calculateDigitInscricaoEstadualSP(...digits);
      digits[9] = digit1;
      inscricaoEstadual = 'P' + printDocument(...digits);
      if (hasMask) {
        inscricaoEstadual = '' + 'P-' + digits[1] + digits[2] + digits[3] + digits[4] +
          digits[5] + digits[6] + digits[7] + digits[8] + '.' + digit1 + '/' + digits[10] +
          digits[11] + digits[12];
      }
      break;
    case 'SE':
      digits = generateDigits(8);
      digit1 = calculateDigit(9, ...digits);
      inscricaoEstadual = printDocument(...digits, digit1);
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + '-' + digit;
      }
      break;
    case 'TO':
      break;
    default:
      break;
  }
  return inscricaoEstadual;
}

function generateBirthDate(){
    var actualDate = new Date();
    var maxYear = actualDate.getFullYear() - 18;
    var minYear = 1900;
    return generateDate(minYear, maxYear);
}

function generateExpirationDate(){
    var actualDate = new Date();
    var minYear = actualDate.getFullYear() + 1;
    var maxYear = minYear + generateRandomNumbers(9);
    return generateDate(minYear, maxYear);
}

function getTotalOfDaysOfAMonth(month, year){
  let totalOfDays = 0;
  let isMonthWith31Days = (month === 01) || (month === 03) || (month === 05) || (month === 07) ||
    (month === 08) || (month === 10) || (month === 12);
  let isMonthWith30Days = (month === 04) || (month === 06) || (month === 09) || (month === 11);
  let isFebruary = (month === 02);
  let isLeapYear = (year % 4 === 0) && ( (year % 100 !== 0) || (year % 400 === 0) );
  if (isMonthWith31Days) {
    totalOfDays = 30;
  }
  else if (isMonthWith30Days) {
    totalOfDays = 29;
  }
  else if (isFebruary) {
      if(isLeapYear) {
        totalOfDays = 28;
      } else {
        totalOfDays = 27;
      }
  }
  return totalOfDays;
}

function generateDate(minYear, maxYear){
  let year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
  let month = generateRandomNumbers(11) + 1;
  let day = 1;
  day = generateRandomNumbers(getTotalOfDaysOfAMonth(month, year)) + 1;
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  const fullDate = day + "/" + month + "/" + year;
  return {day, month, year, fullDate};
}

function generateCompanyWebsite(name){
    var websiteName = name.replace(/[áéíóúàèìòùâêîôûãõç\s]/g,"").toLowerCase();
    var workSegment = generateWorkSegment().replace(/[áéíóúàèìòùâêîôûãõç\s]/g,"").toLowerCase();
    return "www." + websiteName + workSegment + ".com.br"
}

function generateCEP(){
  const ceps = CEPsJSON;
  const amountOfCEPs = ceps.length - 1;
  const i = generateRandomNumbers(amountOfCEPs);
  const fullCEP = ceps[i];
  const local = fullCEP.substring(0,5);
  const identifier = fullCEP.substring(8,5);
  return {fullCEP, local, identifier};
}

function generateAddressComplement(){
  const complements = ['Ap. 107 ', 'Casa 35 ', 'Casa A', 'Casa A', 'Vila', 'Sítio'];
  const i = generateRandomNumbers(complements.length - 1);
  return complements[i];
}

function generateCompanyEmail(name){
    const emailName = name.replace(/[áéíóúàèìòùâêîôûãõç\s]/g,"").toLowerCase();
    const workSegment = generateWorkSegment().replace(/[áéíóúàèìòùâêîôûãõç\s]/g,"").toLowerCase();
    return emailName + "@" + emailName + workSegment + ".com.br"
}

function generateEmail(name){
  const emailName = name.replace(/[áéíóúàèìòùâêîôûãõç\s]/g,"").toLowerCase();
  const providers = internetProvidersJSON;
  const i = generateRandomNumbers(providers.length - 1);
  const isBrazilian = (generateRandomNumbers(1) === 1) ? ".br" : "";
  return emailName + "@" + providers[i] + ".com" + isBrazilian;
}

function generatePassword() {
  const characters = charactersJSON;
  const amountOfDigits = 8;
  const amountOfCharacters = characters.length - 1;
  let password = "";
  for(let i = 0; i <= amountOfDigits; i++) {
    let index = generateRandomNumbers(amountOfCharacters);
    password += characters[index];
  }
  return password;
}

function generateRG() {
    var RGs = RGsJSON;
    const amountOfRGs = RGs.length - 1;
    const randomIndex = generateRandomNumbers(amountOfRGs);
    return RGs[randomIndex];
}

function generateStates(){
  const names = brazilianStatesJSON.names;
  const acronyms = brazilianStatesJSON.acronyms;
  const amountOfStates = nomes.length - 1;
  const randomIndex = generateRandomNumbers(amountOfStates);
  const name = names[randomIndex];
  const acronym = acronyms[randomIndex];
  return {name, acronym};
}

function generateTelephone(){
  const ddd = Math.floor(Math.random() * (99 - 11 + 1)) + 11;
  const digits = generateDigits(7);
  let telephone = "" + ddd;
  for(let i = 0; i < digits.length; i++) {
    telephone += digits[i];
  }
  digits[0] = 3;
  return telephone;
}

function generateCellphone(){
  const ddd = Math.floor(Math.random() * (99 - 11 + 1)) + 11;
  const digits = generateDigits(8);
  let cellphone = "" + ddd;
  digits[0] = "9";
  for(let i = 0; i < digits.length; i++) {
    cellphone += digits[i];
  }
  return cellphone;
}

function buildCreditCardInformations (cardFlag, cardStartWith, cardDigitsSize = [16], startCVC = 100, endCVC = 999) {
  let flag = cardFlag;
  let startWith = choseRandomOption(cardStartWith);
  let digitsSize = choseRandomOption(cardDigitsSize);
  let CVC = generateRandomNumbersWithInterval(startCVC, endCVC);
  return { flag, startWith, digitsSize, CVC}
}

function selectCreditCardInformations(creditCardFlag){
  let creditCard = {};
  switch(creditCardFlag) {
    case "visa":
      creditCard = buildCreditCardInformations("Visa", ["4"], [13, 16]);
      break;
    case "mastercard":
    case "master":
      creditCard = buildCreditCardInformations("Mastercard", ["5"]);
      break;
    case "diners":
      creditCard = buildCreditCardInformations("Diners", ['301','305','36','38'], [14, 16]);
      break;
    case "elo":
      creditCard = buildCreditCardInformations("Elo", ['636368', '636369', '438935', '504175', '451416',
        '636297', '5067', '4576', '4011', '506699']);
      break;
    case "amex":
      creditCard = buildCreditCardInformations("Amex", ['34','37'], [15], 1000, 9999);
      break;
    case "discover":
      creditCard = buildCreditCardInformations("Discover", ['6011','622','64','65'], [16], 1000, 9999);
      break;
    case "aura":
      creditCard = buildCreditCardInformations("Aura", ['50']);
      break;
    case "jcb":
      creditCard = buildCreditCardInformations("jcb", ['35']);
      break;
    case "hipercard":
      creditCard = buildCreditCardInformations("Hipercard", ['38','60'], [13, 16, 19]);
      break;
    default:
      console.error('CreditCard flag not found!');
      break;
  }
  return creditCard;
}

function generateCreditCardBin(startWith, digits) {
  const startDigitsIn = startWith.length;
  let bin = "";
  if(startDigitsIn >= 1 && startDigitsIn <= 6) {
    bin += startWith;
    for(let i = startDigitsIn; i < 6; i++) {
      bin += digits[i + 1];
    }
  } else {
    console.error(`There isn't bin with ${startDigitsIn} characters!`);
  }
  return bin;
}

function calculateVerifyDigitCreditCard(creditCardNumber) {
  let sum = 0;
  for (let i = 0; i < creditCardNumber.length; i++) {
    let digitCurrentPosition = parseInt(creditCardNumber.substring(i, (i + 1)));
    if ((i % 2) == 0) {
      digitCurrentPosition = digitCurrentPosition * 2;
      if (digitCurrentPosition > 9)
        digitCurrentPosition = (digitCurrentPosition / 10) + mod(digitCurrentPosition, 10);
    }
    sum += digitCurrentPosition;
  }
  const multipleOf10 = mod(sum, 10);
  const verifyDigit = (multipleOf10 === 0) ? 0 : 10 - multipleOf10;
  return verifyDigit;
}

function printFullCreditCardNumber(card){
  const digits = generateDigits(7);
  const bin = generateCreditCardBin(card.startWith, digits);
  const randomSizeNumber = card.digitsSize - (bin.length + 1);
  let creditCardNumber = "" + bin;
  for (let i = 0; i < randomSizeNumber; i++) {
    let digit = generateRandomNumbers(9);
    creditCardNumber += digit;
  }
  const verifyDigit = calculateVerifyDigitCreditCard(creditCardNumber);
  creditCardNumber += verifyDigit;
  return creditCardNumber;
}

function generateCreditCard(){
  const creditCardFlags = creditCardFlagsJSON;
  const creditCardFlag = choseRandomOption(creditCardFlags);
  const card = selectCreditCardInformations(creditCardFlag);
  const flag = card.flag;
  const creditCardNumber = printFullCreditCardNumber(card);
  const CVC = card.CVC;
  let date = generateDate(2018, 2026);
  let expirationDate = date.month + "/" + date.year;
  return {flag, creditCardNumber, CVC, expirationDate};
}
