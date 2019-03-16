const namesJSON = require('./data/names.json').names;
const familyNamesJSON = require('./data/family-names.json').familyNames;
const workSegmentJSON = require('./data/work-segment.json').workSegment;
const brazilianStatesJSON = require('./data/brazilian-states.json');
const CEPsJSON = require('./data/ceps').CEPs;
const internetProvidersJSON = require('./data/internet-providers.json');
const charactersJSON = require('./data/characters').characters;
const RGsJSON = require('./data/brazilian-general-registrater').brazilianGeneralRegister;
const creditCardFlagsJSON = require('./data/credit-cards').flags;

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

function calculateDigitCPF(...digits) {
  let digit = 0;
  let amountOfDigits = digits.length;
  let multiplier = 2;
  for (let i = amountOfDigits; i >= 1; i--) {
    digit += digits[i] * multiplier;
    multiplier++;
  }
  digit = 11 - (mod(digit, 11));
  return (digit < 10) ? digit : 0;
}

function printFullCPF(hasMask, ...digits) {
  let cpf = '';
  cpf = digits.reduce((accumulator, digit, index) => {
    let mask = '';
    if(hasMask) {
      if(index === 3 || index === 6) {
        mask = '.';
      } else if (index === 9) {
        mask = '-';
      }
    }
    return accumulator + digit + mask;
  });
  return cpf;
}

function generateDigits(amountOfDigits){
  const digits = [];
  for(let i = 1; i <= amountOfDigits; i++) {
    digits[i] = generateRandomNumbers(9);
  }
  return digits;
}

function generateBrazilianCPF(hasMask = false) {
  const amountOfDigits = 9;
  const digits = generateDigits(amountOfDigits);
  let digit1 = calculateDigitCPF(...digits);
  let digit2 = calculateDigitCPF(...digits, digit1);
  let cpf = printFullCPF(hasMask, ...digits, digit1, digit2);
  return cpf;
}

function calculateDigit (...digits) {
  let digit = 0;
  let amountOfDigits = digits.length;
  let multiplier = 2;
  for (let i = amountOfDigits; i >= 1; i--) {
    if()
    digit += digits[i] * multiplier;
    multiplier++;
  }
  digit = 11 - (mod(digit, 11));
  return (digit < 10) ? digit : 0;
  let digit1 = digits[12] * 2 + digits[11] * 3 + digits[10] * 4 + digits[9] * 5 + digits[8] * 6
    + digits[7] * 7 + digits[6] * 8 + digits[5] * 9 + digits[4] * 2 + digits[3] * 3
    + digits[2] * 4 + digits[1] * 5;
  digit1 = 11 - (mod(digit1, 11));
  return (digit1 < 10) ? digit1 : 0;
}

function calculateSecondDigitCNPJ (digits, digit1) {
  let digit2 = digit1 * 2 + digits[12] * 3 + digits[11] * 4 + digits[10] * 5 + digits[9] * 6 +
    digits[8] * 7 + digits[7] * 8 + digits[6] * 9 + digits[5] * 2 + digits[4] * 3 + digits[3]* 4 +
      digits[2] * 5 + digits[1] * 6;
  digit2 = 11 - (mod(digit2, 11));
  return (digit2 < 10) ? digit2 : 0;
}

function printFullCNPJ (digits, digit1, digit2) {
  return '' + digits[1] + digits[2] + '.' + digits[3] + digits[4] + digits[5] + '.' +
    digits[6] + digits[7] + digits[8] + '/' + digits[9] + digits[10] + digits[11] +
    digits[12] + '-'+ digit1 + digit2;
}

function generateBrazilianCNPJ() {
  const amountOfDigits = 12;
  const digits = generateDigits(amountOfDigits);
  digits[9] = 0;
  digits[10] = 0;
  digits[11] = 0;
  digits[12] = 1;
  let digit1 = calculateFirstDigitCNPJ(digits);
  let digit2 = calculateSecondDigitCNPJ(digits, digit1);
  return printFullCNPJ(digits, digit1, digit2);
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

function printFullTituloDeEleitor(digit1, digit2, numbers){
  let title = "";
  for(let i = 1; i <= 10; i++){
    title += numbers[i];
    if(i % 4 == 0)
      title += " ";
  }
  title += digit1 + digit2;
  return title;
}

function generateBrazilianTituloDeEleitor() {
  let digits = [];
  for(let i = 1; i <= 8; i++){
    const n = 9;
    digits[i] = generateRandomNumbers(n) % 9;
    digits[9] = generateRandomNumbers(n) % 2;
    digits[10] = generateRandomNumbers(n) % 8;
  }
  const digit1 = calculateFirstVerifyDigitTituloDeEleitor(digits);
  const digit2 = calculateSecondVerifyDigitTituloDeEleitor(digits, digit1);
  return printFullTituloDeEleitor(digits, digit1, digit2);
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

function printFullInscricaoEstadual(...digits) {
  let inscricaoEstadual = '';
  for(let i = 1; i <= digits.length - 1; i++) {
    inscricaoEstadual += digits[i];
  }
  return inscricaoEstadual;
}

function generateInscricaoEstadual(inscricaoEstadual = 'Isento', hasMask = false) {
  const states = brazilianStatesJSON.acronyms;
  states.push('SSP');
  const randomIndex = generateRandomNumbers(states.length - 1);
  const companyState = states[randomIndex];
  const digits = [];
  switch(companyState) {
    case 'AC':
      digits = generateDigits(9);

      digits[1] = 0;
      digits[2] = 1;

      let digit1 = digits[11] * 2 + digits[10] * 3 + digits[9] * 4 + digits[8] * 5 + digits[7] * 6 +
        digits[6] * 7 + digits[5] * 8 + digits[4] * 9 + digits[3] * 2 +
        digits[2] * 3 + digits[1] * 4;
      digit1 = 11 - (mod(digit1, 11));
      digit1 = (digit1 < 10) ? digit1 : 0;

      let digit2 = digit1 * 2 + numbers[11] * 3 + numbers[10] * 4 + numbers[9] * 5 +
        numbers[8] * 6 + numbers[7] * 7 + numbers[6] * 8 + numbers[5] * 9 + numbers[4] * 2 +
        numbers[3] * 3 + numbers[2] * 4 + numbers[1] * 5;
      digit2 = 11 - (mod(digit2, 11));
      digit2 = (digit2 < 10) ? digit2 : 0;

      if (hasMask) {
          inscricaoEstadual =  '' + digits[1] + digits[2] + '.' + digits[3] + digits[4] +
          digits[5] + '.' + digits[6] + digits[7] + digits[8] + '.' + digits[9] + digits[10] +
          digits[11] + '-' + digit1 + digit2;
      }
      else {
        inscricaoEstadual = printFullInscricaoEstadual(...digits, digit1, digit2);
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
      let digit1 = digits[8] * 2 + digits[7] * 3 + digits[6] * 4 + digits[5] * 5 + digits[4] * 6 +
        digits[3] * 7 + digits[2] * 8 + digits[1] * 9;
      digit = mod(digit, 11);
      digit = 11 - (mod(digit, 11));
      if (digit >= 10) {
        digit = 0;
      }
      inscricaoEstadual = printFullInscricaoEstadual(...digits, digit);
      break;
    case 'AP':
      digits = generateDigits(8);
      digits[1]  = 0;
      digits[2]  = 3;
      let digit = digits[8] * 2 + digits[7] * 3 + digits[6] * 4 + digits[5] * 5 + digits[4] * 6 +
        digits[3] * 7 + digits[2] * 8 + digits[1] * 9;
      digit = mod(digit, 11);
      digit = 11 - (mod(digit, 11));
      if (digit >= 10) {
          digit = 0;
      }
      inscricaoEstadual = printFullInscricaoEstadual(...digits, digit);
      break;
    case 'AM':
      digits = generateDigits(8);
      let digit = digits[8] * 2 + digits[7] * 3 + digits[6] * 4 + digits[5] * 5 + digits[4] * 6 +
        digits[3] * 7 + digits[2] * 8 + digits[1] * 9;
      digit = mod(digit, 11);
      digit = 11 - (mod(digit, 11));
      if (digit >= 10) {
          digit = 0;
      }
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + '.' + digits[3] + digits[4] + digits[5] +
          '.' + digits[6] + digits[7] + digits[8] + '-' + digit;
      }
      else {
        inscricaoEstadual = printFullInscricaoEstadual(...digits, digit);
      }
      break;
    case 'BA':
      digits = generateDigits(6);
      let digit1 = digits[6] * 2 + digits[5] * 3 + digits[4] * 4 + digits[3] * 5 +
        digits[2] * 6 + digits[1] * 7;
      digit1 = 11 - (mod(digit1, 11));
      if (digit1>=10) digit1 = 0;
      let digit2 = digit1 * 2 + digits[6] * 3 + digits[5] * 4 + digits[4] * 5 + digits[3] * 6 +
        digits[2] * 7 + digits[1] * 8 ;
      digit2 = 11 - (mod(digit2, 11));
      if (digit2>=10) digit2 = 0;
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + '-' + digit1 + digit2;
      }
      else {
        inscricaoEstadual = printFullInscricaoEstadual(...digits, digit1, digit2);
      }
      break;
    case 'CE':
      digits = generateDigits(8);
      let digit = digits[8] * 2 + digits[7] * 3 + digits[6] * 4 + digits[5] * 5 + digits[4] * 6 +
        digits[3] * 7 + digits[2] * 8 + digits[1] * 9;
      digit = mod(digit, 11);
      digit = 11 - (mod(digit, 11));
      if (digit >= 10) {
        digit = 0;
      }
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + '-' + digit;
      }
      else {
        inscricaoEstadual = printFullInscricaoEstadual(...digits, digit);
      }
      break;
    case 'DF':
      digits = generateDigits(11);
      digits[1] = 0;
      digits[2] = 7;
      let digit1 = digits[11] * 2 + digits[10] * 3+ digits[9] * 4 + digits[8] * 5 + digits[7] * 6 +
        digits[6] * 7 + digits[5] * 8 + digits[4] * 9 +digits[3] * 2 +digits[2] * 3 +digits[1] * 4;
      digit1 = 11 - (mod(digit1, 11));
      if (digit1 >= 10) {
        digit1 = 0;
      }
      let digit2 = digit1 * 2 + digits[11] * 3 + digits[10] * 4 + digits[9] * 5 + digits[8] * 6 +
        digits[7] * 7 + digits[6] * 8 + digits[5] * 9 + digits[4] * 2 + digits[3] * 3 +
        digits[2] * 4 + digits[1] * 5;
      digit2 = 11 - (mod(digit2, 11));
      if (digit2>=10){
        digit2 = 0;
      }
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + '.' + digits[3] + digits[4] + digits[5] +
          '.' + digits[6] + digits[7] + digits[8] + '.' + digits[9] + digits[10] + digits[11] +
          '-' + digit1 + digit2;
      }
      else {
          inscricaoEstadual = printFullInscricaoEstadual(...digits, digit1, digit2);
      }
      break;
    case 'ES':
      digits = generateDigits(8);
      let digit = digits[8] * 2 + digits[7] * 3 + digits[6] * 4 + digits[5] * 5 + digits[4] * 6 +
        digits[3] * 7 + digits[2] * 8 + digits[1] * 9;
      digit2 = mod(digit1, 11);
      digit2 = 11 - (mod(digit1, 11));
      if (digit2 >= 10) {
        digit2 = 0;
      }
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + '-' + digit;
      }
      else {
          inscricaoEstadual = printFullInscricaoEstadual(...digits, digit);
      }
      break;
    case 'GO':
      digits = generateDigits(8);
      let digit = digits[8] * 2 + digits[7] * 3 + digits[6] * 4 + digits[5] * 5 + digits[4] * 6 +
        digits[3] * 7 + digits[2] * 8 + digits[1] * 9;
      digit = mod(digit1, 11);
      digit = 11 - (mod(digit1, 11));
      if (digit >= 10) {
        digit = 0;
      }
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + '.' + digits[3] + digits[4] + digits[5] +
          '.' + digits[6] + digits[7] + digits[8] + '-' + digit;
      }
      else {
        inscricaoEstadual = printFullInscricaoEstadual(...digits, digit);
      }
      break;
    case 'MA':
      digits = generateDigits(8);
      digits[1] = 1;
      digits[2] = 2;
      let digit = digits[8] * 2 + digits[7] * 3 + digits[6] * 4 + digits[5] * 5 + digits[4] * 6 +
        digits[3] * 7 + digits[2] * 8 + digits[1] * 9;
      digit = mod(digit, 11);
      digit = 11 - (mod(digit, 11));
      if (digit >= 10) {
        digit = 0;
      }
      inscricaoEstadual = printFullInscricaoEstadual(...digits, digit);
      break;
    case 'MS':
      digits = generateDigits(10);
      let digit = digits[10] * 2 + digits[9] * 3 + digits[8] * 4 + digits[7] * 5 + digits[6] * 6 +
        digits[5] * 7 + digits[4] * 8 + digits[3] * 9 + digits[2] * 2 + digits[1] * 3;
      digit = mod(digit, 11);
      digit = 11 - (mod(digit, 11));
      if (digit >= 10) {
        digit = 0;
      }
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + digits[9] + digits[10] + '-' + digit;
      }
      else {
        inscricaoEstadual = printFullInscricaoEstadual(...digits, digit);
      }
      break;
    case 'MT':
      digits = generateDigits(10);
      let digit = digits[10] * 2 + digits[9] * 3 + digits[8] * 4 + digits[7] * 5 + digits[6] * 6 +
        digits[5] * 7 + digits[4] * 8 + digits[3] * 9 + digits[2] * 2 + digits[1] * 3;
      digit = mod(digit, 11);
      digit = 11 - (mod(digit, 11));
      if (digit2 >= 10) {
        digit2 = 0;
      }
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + digits[9] + digits[10] + '-' + digit;
      }
      else {
          inscricaoEstadual = printFullInscricaoEstadual(...digits, digit);
      }
      break;
    case 'MG':
      break;
    case 'PA':
      digits = generateDigits(8);
      let digit = digits[8] * 2 + digits[7] * 3 + digits[6] * 4 + digits[5] * 5 + digits[4] * 6 +
        digits[3] * 7 + digits[2] * 8 + digits[1] * 9;
      digit = mod(digit, 11);
      digit = 11 - (mod(digit, 11));
      if (digit >= 10) {
        digit = 0;
      }
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + '-' + digit;
      }
      else {
        inscricaoEstadual = printFullInscricaoEstadual(...digits, digit);
      }
      break;
    case 'PB':
      digits = generateDigits(8);
      let digit = digits[8] * 2 + digits[7] * 3 + digits[6] * 4 + digits[5] * 5 + digits[4] * 6 +
        digits[3] * 7 + digits[2] * 8 + digits[1] * 9;
      digit = mod(digit, 11);
      digit = 11 - (mod(digit, 11));
      if (digit >= 10) {
        digit = 0;
      }
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + '-' + digit;
      }
      else {
        inscricaoEstadual = printFullInscricaoEstadual(...digits, digit);
      }
      break;
    case 'PR':
      const digits = generateDigits(8);
      let digit1 = digits[8] * 2 + digits[7] * 3 + digits[6] * 4 + digits[5] * 5 + digits[4] * 6 +
        digits[3] * 7 + digits[2] * 8 + digits[1] * 9;
      digit1 = 11 - (mod(digit1, 11));
      if (digit1 >= 10){
        digit1 = 0;
      }
      let digit2 = digit1*2 + digits[8] * 3 + digits[7] * 4 + digits[6] * 5 + digits[5] * 6 +
        digits[4] * 7 + digits[3] * 2 + digits[2] * 3 + digits[1] * 4;
      digit2 = 11 - (mod(digit2, 11));
      if (digit2 >= 10) {
        digit2 = 0;
      }
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + '-' + digit1 + digit2;
      }
      else {
          inscricaoEstadual = printFullInscricaoEstadual(...digits, digit1, digit2);
      }
      break;
    case 'PE':
      const digits = generateDigits(7);
      let digit1 = digits[7] * 2 + digits[6] * 3 + digits[5] * 4 + digits[4] * 5 + digits[3] * 6 +
        digits[2] * 7 + digits[1] * 8;
      digit1 = 11 - (mod(digit1, 11));
      if (digit1 >= 10) {
        digit1 = 0;
      }
      let digit2 = digit1*2 + digits[7] * 3 + digits[6] * 4 + digits[5] * 5 + digits[4] * 6 +
        digits[3] * 7 + digits[2] * 8 + digits[1] * 9;
      digit2 = 11 - (mod(digit2, 11));
      if (digit2 >= 10) {
        digit2 = 0;
      }
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + '-' + digit1 + digit2;
      }
      else {
        inscricaoEstadual = printFullInscricaoEstadual(...digits, digit1, digit2);
      }
      break;
    case 'PI':
      const digits = generateDigits(8);
      let digit = digits[8] * 2 + digits[7] * 3 + digits[6] * 4 + digits[5] * 5 + digits[4] * 6 +
        digits[3] * 7 + digits[2] * 8 + digits[1] * 9;
      digit = mod(digit, 11);
      digit = 11 - (mod(digit, 11));
      if (digit >= 10) {
        digit = 0;
      }
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + '-' + digit;
      }
      else {
        inscricaoEstadual = printFullInscricaoEstadual(...digits, digit);
      }
      break;
    case 'RJ':
      const digits = generateDigits(8);
      let digit1 = digits[7] * 2 + digits[6] * 3 + digits[5] * 4 + digits[4] * 5 + digits[3] * 6 +
        digits[2] * 7 + digits[1] * 2;
      digit = mod(digit, 11);
      digit = 11 - (mod(digit, 11));
      if (digit >= 10) {
        digit = 0;
      }
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + '.' + digits[3] + digits[4] + digits[5] +
          '.' + digits[6] + digits[7] + '-' + digit;
      }
      else {
        inscricaoEstadual = printFullInscricaoEstadual(...digits, digit);
      }
      break;
    case 'RN':
      break;
    case 'RS':
      const digits = generateDigits(9);
      let digit = digits[9] * 2 + digits[8] * 3 + digits[7] * 4 + digits[6] * 5 + digits[5] * 6 +
        digits[4] * 7 + digits[3] * 8 + digits[2] * 9 + digits[1] * 2;
      digit = 11 - (mod(digit, 11));
      if (digit >= 10) {
        digit = 0;
      }
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + '/' + digits[4] + digits[5] + digits[6] + digits[7] + digits[8] + digits[9] + digit2;
      }
      else {
          inscricaoEstadual = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+digit2;
      }
      break;
    case 'RO':
      const digits = generateDigits(13);
      digits[1] = 0;
      digits[2] = 7;
      let digit = n13*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6;
      digit = 11 - (mod(digit, 11));
      if (digit >= 10) {
        digit = 0;
      }
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + digits[9] + digits[10] + digits[11] + digits[12] +
          digits[13] + '-' + digit;
      }
      else {
        inscricaoEstadual = printFullInscricaoEstadual(...digits, digit);
      }
      break;
    case 'RR':
      const digits = generateDigits(8);
      let digit = digits[8] * 8 + digits[7] * 7 + digits[6] * 6 + digits[5] * 5 + digits[4] * 4 +
        digits[3] * 3 + digits[2] * 2 + digits[1] * 1;
      digit = 11 - (mod(digit, 11));
      if (digit >= 10) {
        digit = 0;
      }
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + '-' + digit1;
      }
      else {
        inscricaoEstadual = printFullInscricaoEstadual(...digits, digit);
      }
      break;
    case 'SC':
      const digits = generateDigits(8);
      var digit = digits[8] * 2 + digits[7] * 3 + digits[6] * 4 + digits[5] * 5 + digits[4] * 6 +
        digits[3] * 7 + digits[2] * 8 + digits[1] * 9 ;
      digit = 11 - (mod(digit, 11));
      if (digit >= 10) {
        digit = 0;
      }
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + '.' + digits[4] + digits[5] +
          digits[6] + '.' + digits[7] + digits[8] + digit;
      }
      else {
        inscricaoEstadual = printFullInscricaoEstadual(...digits, digit);
      }
      break;
    case 'SP':
      const digits = generateDigits(11);
      let digit1 = digits[8] * 10 + digits[7] * 8 + digits[6] * 7 + digits[5] * 6 + digits[4] * 5 +
        digits[3] * 4 + digits[2] * 3 + digits[1] * 1;
      digit1 = 11 - (mod(digit1, 11));
      if (digit1 >= 10) {
        digit1 = 0;
      }
      let digit2 = digits[11] * 2 + digits[10] * 3 + digit1 * 4 + digits[8] * 5 +
        digits[7] * 6 + digits[6] * 7 + digits[5] * 8 + digits[4] * 9 + digits[3] * 10 +
        digits[2] * 2 + digits[1] * 3;
      digit2 = 11 - (mod(digit2, 11));
      if (digit2 >= 10) {
        digit2 = 0;
      }
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + '.' + digits[4] + digits[5] +
          digits[6] + '.' + digits[7] + digits[8] + digit1 + '.' + digits[10] + digits[11] + digit2;
      }
      else {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + digit1 + digits[10] + digits[11] + digit2;
      }
      break;
    case 'SPP':
      const digits = generateDigits(12);
      digits[1]  = 0;
      let digit = digits[8] * 10 + digits[7] * 8 + digits[6] * 7 + digits[5] * 6 + digits[4] * 5 +
        digits[3] * 4 + digits[2] * 3 + digits[1] * 1;
      digit = 11 - (mod(digit, 11));
      if (digit >= 10) {
        digit = 0;
      }
      if (hasMask) {
        inscricaoEstadual = '' + 'P-' + digits[1] + digits[2] + digits[3] + digits[4] +
          digits[5] + digits[6] + digits[7] + digits[8] + '.' + digit1 + '/' + digits[10] +
          digits[11] + digits[12];
      }
      else {
        inscricaoEstadual = '' + 'P' + digits[1] + digits[2] + digits[3] + digits[4] +
          digits[5] + digits[6] + digits[7] + digits[8] + digit1 + digits[10] +
          digits[11] + digits[12];
      }
      break;
    case 'SE':
      const digits = generateDigits(8);
      let digit = digits[8] * 2 + digits[7] * 3 + digits[6] * 4 + digits[5] * 5 + digits[4] * 6 +
        digits[3] * 7 + digits[2] * 8 + digits[1] * 9;
      digit = mod(digit1, 11);
      digit = 11 - (mod(digit, 11));
      if (digit >= 10) {
        digit = 0;
      }
      if (hasMask) {
        inscricaoEstadual = '' + digits[1] + digits[2] + digits[3] + digits[4] + digits[5] +
          digits[6] + digits[7] + digits[8] + '-' + digit;
      }
      else {
        inscricaoEstadual = printFullInscricaoEstadual(...digits, digit);
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

function getTotalOfDaysOfAMonth(month){
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
  day = generateRandomNumbers(getTotalOfDaysOfAMonth(month)) + 1;
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

function getCreditCardInformations(creditCardFlag){
  let flag = "";
  let startWith = "";
  let size = 16;
  let cvc = generateRandomNumbersWithInterval(100, 999);
  switch(creditCardFlag) {
    case "visa":
      flag = "Visa";
      startWith = "4";
      size = choseRandomOption([13, size]);
      break;
    case "mastercard":
    case "master":
      flag = "Mastercard";
      startWith = "5";
      break;
    case "diners":
      flag = "Diners";
      startWith = choseRandomOption(['301','305','36','38']);
      size = choseRandomOption([14, size]);
      break;
    case "elo":
      flag = "Elo";
      startWith = choseRandomOption(['636368', '636369', '438935', '504175', '451416',
        '636297', '5067', '4576', '4011', '506699']);
      break;
    case "amex":
      flag = "Amex";
      startWith = choseRandomOption(['34','37']);
      size = 15;
      cvc = generateRandomNumbersWithInterval(1000, 9999);
      break;
    case "discover":
      flag = "Discover";
      startWith = choseRandomOption(['6011','622','64','65']);
      cvc = generateRandomNumbersWithInterval(1000, 9999);
      break;
    case "aura":
      flag = "Aura";
      startWith = '50';
      break;
    case "jcb":
      flag = "jcb";
      startWith = '35';
      break;
    case "hipercard":
      flag = "Hipercard";
      startWith = choseRandomOption(['38','60']);
      size = choseRandomOption([13, size, 19]);
      break;
    default:
      console.error('CreditCard flat not found!');
      break;
  }
  return { flag, startWith, size, cvc};
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
  const randomSizeNumber = size - (bin.length + 1);
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
  const totalOfCreditCards = creditCardFlags.length - 1;
  const creditCardFlag = generateRandomNumbers(totalOfCreditCards);
  const card = getCreditCardInformations(creditCardFlag);
  const creditCardNumber = printFullCreditCardNumber(card);
  let date = generateDate(2018, 2026);
  let expirationDate = date.month + "/" + date.year;
  return {flag, creditCardNumber, cvc, expirationDate};
}
