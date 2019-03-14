const namesJSON = require('./data/names.json').names;
const familyNamesJSON = require('./data/family-names.json').familyNames;
const workSegmentJSON = require('./data/work-segment.json').workSegment;
const brazilianStatesJSON = require('./data/brazilian-states.json').brazilianStates;

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

function calculateFirstDigitCPF(numbers) {
  let digit =  numbers[9] * 2 + numbers[8] * 3 + numbers[7] * 4 + numbers[6] * 5 + numbers[5] * 6 + numbers[7]
    + numbers[3] * 8 + numbers[2] * 9 + numbers[1] * 10;
  digit = 11 - (mod(digit, 11));
  return (digit < 10) ? digit : 0;
}

function calculateSecondDigitCPF(numbers, digit1) {
  let digit2 = digit1 * 2 + number9 * 3 + number8 * 4 + number7 * 5 + number6 * 6 +
    number5 * 7 + number4 * 8 + number3 * 9 + number2 * 10 + number1 * 11;
  digit2 = 11 - (mod(digit2, 11));
  return (digit2 < 10) ? digit2 : 0;
}

function printFullCPF(numbers, digit1, digit2) {
  return '' + numbers[1] + numbers[2] + numbers[3] + '.' + numbers[4] + numbers[5] + numbers[6] +
    '.' + numbers[7] + numbers[8] + numbers[9] + '-' + digit1 + digit2;
}

function generateDigits(amountOfDigits){
  const digits = [];
  for(let i = 1; i <= amountOfDigits; i++) {
    digits[i] = generateRandomNumbers(9);
  }
}

function generateBrazilianCPF() {
  const number = 9;
  const digits = generateDigits();
  let digit1 = calculateFirstDigitCPF(digits);
  let digit2 = calculateSecondDigitCPF(digits, digit1);
  return printFullCPF(digits, digit1, digit2);
}

function calculateFirstDigitCNPJ (digits) {
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
  const number = 9;
  const digits = generateDigits(12);
  digits[9] = 0;
  digits[10] = 0
  digits[11] = 0;
  digits[12] = 1;
  let digit1 = calculateFirstDigitCNPJ(digits);
  let digit2 = calculateSecondDigitCNPJ(digits, digit1);
  return printFullCNPJ(digits, digit1, digit2)
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

function nameGenerator(){
	const names = namesJSON;
  const number = names.length - 1;
  const i = Math.round(Math.random() * number);
	return names[i];
}

function familyNameGenerator(){
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
  const states = brazilianStatesJSON;
  states.push('SSP');
  const i = generateRandomNumbers(states.length - 1);
  const companyState = states[i];
  switch(companyState) {
    case 'AC':
      const digits = generateDigits(9);

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
      const digits = generateDigits(8);
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
      const digits = generateDigits(8);
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
      const digits = generateDigits(8);
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
      const digits = generateDigits(6);
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
    case 'DF':
      const digits = generateDigits(11);
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
      const digits = generateDigits(8);
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
      const digits = generateDigits(8);
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
      const digits = generateDigits(8);
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
      const digits = generateDigits(10);
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
      const digits = generateDigits(10);
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
    case 'PB':
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
    var dataAtual = new Date();
    var anoMax = dataAtual.getFullYear() - 18;
    var anoMin = 1900;
    return geraData(anoMin, anoMax);
}

function geraDataValidade(){
    var dataAtual = new Date();
    var anoMin = dataAtual.getFullYear() + 1;
    var anoMax = anoMin + generateRandomNumbers(9);
    return geraData(anoMin, anoMax);
}

function geraData(anoMin, anoMax){

    var ano = Math.floor(Math.random() * (anoMax - anoMin + 1)) + anoMin;
    var mes = generateRandomNumbers(11) + 1;
    var dia = 1;

    // Mês com 31 dias
    if( (mes==01) || (mes==03) || (mes==05) || (mes==07) || (mes==08) || (mes==10) || (mes==12) )
        dia = generateRandomNumbers(30) + 1;
    // Mês com 30 dias
    else if( (mes==04) || (mes==06) || (mes==09) || (mes==11) )
        dia = generateRandomNumbers(29) + 1;
    // Se for o mês de Fevereiro.
    else if( (mes==02) ){
        // Se for ano bissexto
        if( (ano % 4 == 0) && ( (ano % 100 != 0) || (ano % 400 == 0) ) )
            dia = generateRandomNumbers(28) + 1;
        // Se não for ano bissexto.
        else
            dia = generateRandomNumbers(27) + 1;
    }
    if(dia < 10)
        dia = "0" + dia;
    if(mes < 10)
        mes = "0" + mes;
    var dataCompleta = dia + "/" + mes + "/" + ano;
    return {dia, mes, ano, dataCompleta};
}

// Função parar gerar o site da empresa
function geraSite(nome){
    var nomeSite = nome.replace(/[áéíóúàèìòùâêîôûãõç\s]/g,"").toLowerCase();
    var segmento = geraSegmento().replace(/[áéíóúàèìòùâêîôûãõç\s]/g,"").toLowerCase();
    return "www." + nomeSite + segmento + ".com.br"
}

// Função parar gerar o cep
function geraCep(){
    var ceps = ['69905038','69922215','57325970','57070528','69095312','69020022','68908199','68909134','45310971','45078618','60835355','60511200','72543204','72543204','29306025','29305602','75806090','74982460','65071480','65073560','65916283','38183187','39408304','79333160','79826020','78075866','78715574','66070660','66830724','58059402','58034575','50720165','55150040','64049484','64027424','83505040','81930374','24935475','26290294','59151500','59073000','59078570','97110370','91787568','76824090','76820268','69313045','69314619','89215440','88161332','49045373','49050563','77001486','77016412','18400803','18400803','02841180','03819130','09980181','16901430','09172422', "11712330"];
    var n = ceps.length - 1;
    var i = Math.round(Math.random()*n);
    return ceps[i];
}

function geraCepDividido(){
    var cepCompleto = geraCep();
    var local = cepCompleto.substring(0,5);
    var identificadores = cepCompleto.substring(8,5);
    return {local, identificadores};
}

// Função parar gerar complemento de endereço
function geraComplemento(){
    var complemento = ['Ap. 107 ', 'Casa 35 ', 'Casa A', 'Casa A', 'Vila', 'Sítio'];
    var i = generateRandomNumbers(complemento.length - 1);
    return complemento[i];
}

// Função parar gerar o email empresarial.
function geraEmailEmpresarial(nome, sobrenome){
    var nomeEmail = nome.replace(/[áéíóúàèìòùâêîôûãõç\s]/g,"").toLowerCase();
    var segmento = geraSegmento().replace(/[áéíóúàèìòùâêîôûãõç\s]/g,"").toLowerCase();
    return nomeEmail + "@" + nomeEmail + segmento + ".com.br"
}

// Função parar gerar o email pessoal.
function geraEmailPessoal(nome){
    var nomeEmail = nome.replace(/[áéíóúàèìòùâêîôûãõç\s]/g,"").toLowerCase();
    var provedores = ["aliciavet", "vaol", "MSNV", "abralink", "vuol", "quentemail", "estrelanet.com", "vzipmail", "axapc", "mailcity", "vmail", "vol", "fgmail", "fig", "fyahoo", "fbol", "fhotmail"];
    var i = generateRandomNumbers(provedores.length - 1);
    var br = "";
    var brasil = generateRandomNumbers(1);
    if(brasil == 1)
        br = ".br";
    return nomeEmail + "@" + provedores[i] + ".com" + br;
}

function geraEmailProvedorValido(nome){
    var provedores = ["gmail.com", "yahoo.com.br", "bol.com.br", "msn.com", "ig.com.br", "globo.com", "oi.com.br", "pop.com.br", "r7.com.br", "folha.com.br", "uol.com", "outlook.com", "zoho.com", "mail.com", "gmx.com", "fastmail.com", "hushmail.com", "inbox.com", "zipmail.com.br", "limao.com.br", "espn.com"];
    var nomeEmail = nome.replace(/[áéíóúàèìòùâêîôûãõç\s]/g,"").toLowerCase();
    var i = generateRandomNumbers(provedores.length - 1);
    return nomeEmail + "@" + provedores[i];
}

// Função parar gerar a senha.
function geraSenha(){
    var caracteres = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","U","V","W","X","Y","Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "\"", "\|", ";", ":", "'", "\"","<", ".", ">", "/", "?"];

    var i = caracteres.length - 1;
    var digito1 = caracteres[generateRandomNumbers(i)];
    var digito2 = caracteres[generateRandomNumbers(i)];
    var digito3 = caracteres[generateRandomNumbers(i)];
    var digito4 = caracteres[generateRandomNumbers(i)];
    var digito5 = caracteres[generateRandomNumbers(i)];
    var digito6 = caracteres[generateRandomNumbers(i)];
    var digito7 = caracteres[generateRandomNumbers(i)];
    var digito8 = caracteres[generateRandomNumbers(i)];

    return digito1 + digito2 + digito3 + digito4 + digito5 + digito6 + digito7 + digito8;
}

// Função para gerar o RG.
function geraRg() {
    var rg = ['911225341', '91.122.534-1', '403289440', '4.032.894-40', '418757896', '41.875.789-6','2977269','2.977.269','429434121','42.943.412-1'];
    var i = generateRandomNumbers(rg.length - 1);
    return rg[i];
}

// Função para gerar o estados do Brasil
function geraEstados(){
    var nomes = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];
    var siglas = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];

    var i = generateRandomNumbers(nomes.length - 1);
    var nome = nomes[i];
    var sigla = siglas[i];

    return {nome, sigla};
}

// Função para gerar os telefones residenciais.
function geraTelefone(){

    var ddd = Math.floor(Math.random() * (99 - 11 + 1)) + 11;
    var digito1 = 3;
    var digito2 = generateRandomNumbers(9);
    var digito3 = generateRandomNumbers(9);
    var digito4 = generateRandomNumbers(9);
    var digito5 = generateRandomNumbers(9);
    var digito6 = generateRandomNumbers(9);
    var digito7 = generateRandomNumbers(9);
    var digito8 = generateRandomNumbers(9);

    return "" + ddd + digito1 + digito2 + digito3 + digito4 + digito5 + digito6 + digito7 + digito8;
}

// Função para gerar os telefones celulares.
function geraTelefoneCelular(){

    var ddd = Math.floor(Math.random() * (99 - 11 + 1)) + 11;
    var digito1 = generateRandomNumbers(9);
    var digito2 = generateRandomNumbers(9);
    var digito3 = generateRandomNumbers(9);
    var digito4 = generateRandomNumbers(9);
    var digito5 = generateRandomNumbers(9);
    var digito6 = generateRandomNumbers(9);
    var digito7 = generateRandomNumbers(9);
    var digito8 = generateRandomNumbers(9);

    return ddd + "9" + digito1 + digito2 + digito3 + digito4 + digito5 + digito6 + digito7 + digito8;
}

// Função para gerar altura
function geraAltura(){
    var alturaMin = 50;
    var alturaMax = 210;
    var alturaCm = Math.floor(Math.random() * (alturaMax - alturaMin + 1)) + alturaMin;
    return alturaCm;
}

// Função para gerar peso
function geraPeso(){
    var pesoMin = 50;
    var pesoMax = 300;
    var peso = Math.floor(Math.random() * (pesoMax - pesoMin + 1)) + pesoMin;
    return peso;
}

function geraSexo(input1, input2){
    var i = generateRandomNumbers(1);
    if(i == 0)
        return input1;
    return input2;
}

// Função para gerar número de cartão de crédito válido
function geraCartaoDeCredito(cartao){

    var bandeira, comecaCom, tamanho, cvc;

    switch(cartao.toLowerCase()){
        case "visa":
            bandeira = "Visa";
            comecaCom = "4";
            tamanho = choseRandomOption([13,16]);
            cvc = generateRandomNumbersWithInterval(100, 999);
            break;
        case "mastercard":
        case "master":
            bandeira = "Mastercard";
            comecaCom = "5";
            tamanho = 16;
            cvc = generateRandomNumbersWithInterval(100, 999);
            break;
        case "diners":
            bandeira = "Diners";
            comecaCom = choseRandomOption(['301','305','36','38']);
            tamanho = choseRandomOption([14,16]);
            cvc = generateRandomNumbersWithInterval(100, 999);
            break;
        case "elo":
            bandeira = "Elo";
            comecaCom = choseRandomOption(['636368', '636369', '438935', '504175', '451416', '636297', '5067', '4576', '4011', '506699']);
            tamanho = 16;
            cvc = generateRandomNumbersWithInterval(100, 999);
            break;
        case "amex":
            bandeira = "Amex";
            comecaCom = choseRandomOption(['34','37']);
            tamanho = 15;
            cvc = generateRandomNumbersWithInterval(1000, 9999);
            break;
        case "discover":
            bandeira = "Discover";
            comecaCom = choseRandomOption(['6011','622','64','65']);
            tamanho = 16;
            cvc = generateRandomNumbersWithInterval(1000, 9999);
            break;
        case "aura":
            bandeira = "Aura";
            comecaCom = '50';
            tamanho = 16;
            cvc = generateRandomNumbersWithInterval(100, 999);
            break;
        case "jcb":
            bandeira = "jcb";
            comecaCom = '35';
            tamanho = 16;
            cvc = generateRandomNumbersWithInterval(100, 999);
            break;
        case "hipercard":
            bandeira = "Hipercard";
            comecaCom = choseRandomOption(['38','60']);
            tamanho = choseRandomOption([13,16,19]);
            cvc = generateRandomNumbersWithInterval(100, 999);
            break;
        default:
            return "A opção " + i + " não pertencente a função";
    }

    var digito2 = generateRandomNumbers(9);
    var digito3 = generateRandomNumbers(9);
    var digito4 = generateRandomNumbers(9);
    var digito5 = generateRandomNumbers(9);
    var digito6 = generateRandomNumbers(9);
    var digitos = comecaCom.length;
    var bin;

    switch(digitos){
        case 1:
            bin = comecaCom + digito2 + digito3 + digito4 + digito5 + digito6;
            break;
        case 2:
            bin = comecaCom + digito3 + digito4 + digito5 + digito6;
            break;
        case 3:
            bin = comecaCom + digito4 + digito5 + digito6;
            break;
        case 4:
            bin = comecaCom + digito5 + digito6;
            break;
        case 5:
            bin = comecaCom + digito6;
            break;
        case 6:
            bin = comecaCom;
            break;
        default:
            return "Não existe bin com " + digitos + " dígitos!";
    }

    var tamanhoNumeroRandom = tamanho - (bin.length + 1);

    var numeroCartao = "" + bin;
    for (var i = 0; i < tamanhoNumeroRandom; i++) {
        var digito = generateRandomNumbers(9);
        numeroCartao += digito;
    }

    // Faz o algotirmo de Luhn para gerar o dígito verificador.
    // O dígito verificador é um número necessário para fazer a soma de um múltiplo de 10.
    var soma = 0;
    for (var i = 0; i < numeroCartao.length; i++) {
        // Pega o dígito na posição atual.
        var digito = parseInt(numeroCartao.substring(i, (i + 1)));

        if ((i % 2) == 0) {
            digito = digito * 2;
            if (digito > 9)
                digito = (digito / 10) + mod(digito,10);
        }
        soma += digito;
    }
    var modulo = mod(soma, 10);

    var digitoVerificador = (modulo == 0) ? 0 : 10 - modulo;
    numeroCartao += digitoVerificador;
    var data = geraData(2018, 2026);
    var validade = data.mes + "/" + data.ano;

    return {bandeira, numeroCartao, cvc, validade};
}
