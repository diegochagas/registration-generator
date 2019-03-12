
function generateRandomNumbers(n) {
  let randomNumber = Math.round(Math.random() * n);
  return randomNumber;
}

function generateRandomNumbersWithInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mod(dividend, divider) {
  return Math.round(dividend - (Math.floor(dividend / divider) * divider));
}

function choseRandomOption(list) {
  const i = this.generateRandomNumbers(list.length - 1);
  return list[i];
}

function calculateFirstDigitCPF(number1, number2, number3, number5, number6, number7, number8, number9) {
  let digit =  number9 * 2 + number8 * 3 + number7 * 4 + number6 * 5 + number5 * 6 + number7
    + number3 * 8 + number2 * 9 + number1 * 10;
  digit = 11 - (this.mod(digit, 11));
  if (digit >= 10) {
    digit = 0;
  }
  return digit;
}

function calculateSecondDigitCPF(number1, number2, number3, number4, number5, number6, number7,
                                number8, number9, digit1) {
  let digit2 = digit1 * 2 + number9 * 3 + number8 * 4 + number7 * 5 + number6 * 6 +
    number5 * 7 + number4 * 8 + number3 * 9 + number2 * 10 + number1 * 11;
  digit2 = 11 - (this.mod(digit2, 11));
  if (digit2 >= 10) {
    digit2 = 0;
  }
  return digit2;
}

function constructStringCPF(number1, number2, number3, number4, number5, number6, number7,
                            number8, number9, digit1, digit2) {
  return '' + number1 + number2 + number3 + '.' + number4 + number5 + number6 + '.' + number7 +
    number8 + number9 + '-' + digit1 + digit2;
}

function generateBrazilianCPF() {
  const number = 9;
  const number1 = this.generateRandomNumbers(number);
  const number2 = this.generateRandomNumbers(number);
  const number3 = this.generateRandomNumbers(number);
  const number4 = this.generateRandomNumbers(number);
  const number5 = this.generateRandomNumbers(number);
  const number6 = this.generateRandomNumbers(number);
  const number7 = this.generateRandomNumbers(number);
  const number8 = this.generateRandomNumbers(number);
  const number9 = this.generateRandomNumbers(number);
  let digit1 = this.calculateFirstDigitCPF(number1, number2, number3, number5, number6, number7, number8, number9);
  let digit2 = this.calculateSecondDigitCPF(number1, number2, number3, number4, number5, number6, number7, number8, number9, digit1);
  return this.constructStringCPF(number1, number2, number3, number4, number5, number6, number7, number8, number9, digit1, digit2);
}

function calculateFirstDigitCNPJ (number1, number2, number3, number4, number5, number6, number7, number8, number9, number10, number11, number12) {
  let digit1 = number12 * 2 + number11 * 3 + number10 * 4 + number9 * 5 + number8 * 6+ number7 * 7 + number6 * 8 + number5 * 9 + number4 * 2 + number3 * 3 + number2 * 4 + number1 * 5;
  digit1 = 11 - (this.mod(digit1,11));
  if (digit1 >= 10) {
    digit1 = 0;
  }
  return digit1;
}

function calculateSecondDigitCNPJ (number1, number2, number3, number4, number5, number6, number7,
                                  number8, number9, number10, number11, number12, digit1) {
  let digit2 = digit1 * 2 + number12 * 3 + number11 * 4 + number10 * 5 + number9 * 6 + number8 * 7 + number7 * 8 + number6 * 9 + number5 * 2 + number4 * 3 + number3 * 4 + number2 * 5 + number1 * 6;
  digit2 = 11 - (this.mod(digit2, 11));
  if (digit2 >= 10) {
    digit2 = 0;
  }
  return digit2;
}

function constructStringCNPJ (number1, number2, number3, number4, number5, number6, number7,
                              number8, number9, number10, number11, number12, digit1, digit2) {
  return '' + number1 + number2 + '.' + number3 + number4 + number5 + '.' + number6 + number7 +
    number8 + '/' + number9 + number10 + number11 + number12 + '-'+ digit1 + digit2;
}

function generateBrazilianCNPJ() {
  const number = 9;
  const number1 = this.generateRandomNumbers(number);
  const number2 = this.generateRandomNumbers(number);
  const number3 = this.generateRandomNumbers(number);
  const number4 = this.generateRandomNumbers(number);
  const number5 = this.generateRandomNumbers(number);
  const number6 = this.generateRandomNumbers(number);
  const number7 = this.generateRandomNumbers(number);
  const number8 = this.generateRandomNumbers(number);
  const number9 = 0;
  const number10 = 0
  const number11 = 0;
  const number12 = 1;
  let digit1 = calculateFirstDigitCNPJ(number1, number2, number3, number4, number5, number6,
    number7, number8, number9, number10, number11, number12);
  let digit2 = calculateSecondDigitCNPJ(number1, number2, number3, number4, number5, number6,
    number7, number8, number9, number10, number11, number12, digit1);
  return constructStringCNPJ(number1, number2, number3, number4, number5, number6, number7,
    number8, number9, number10, number11, number12, digit1, digit2)
}

  // FIX CODE FROM HERE
    function generateBrazilianTituloDeEleitor() {
      let numero = [], soma1, soma2, parte1,parte2,parte3,parte4, dig1, dig2;

      for(var i=1;i<=8;i++){
        const n = 9;
        numero[i] = this.generateRandomNumbers(n)%9;
        numero[9] = this.generateRandomNumbers(n)%2;
        numero[10] = this.generateRandomNumbers(n)%8;
      }
      //*==========================================*
      //| Primeiro digito veridicador |
      //*==========================================*
      soma1=((numero[1]*2)+
        (numero[2]*3)+
        (numero[3]*4)+
        (numero[4]*5)+
        (numero[5]*6)+
        (numero[6]*7)+
        (numero[7]*8)+
        (numero[8]*9));
      parte1= parseInt((soma1 / 11));
      parte2= (parte1 * 11);
      dig1=(soma1 - parte2);
      if(dig1>9)
        dig1=0;
      //*=========================================*
      //| Segundo digito verificador |
      //*=========================================*
      soma2=((numero[9]*7)+
        (numero[10]*8)+
        (dig1*9));
      parte3=parseInt(soma2 / 11);
      parte4=(parte3 * 11);
      dig2=(soma2 - parte4);
      if(dig2>9)
        dig2=0;
      //*==========================================*
      //| Impressao do numero completo |
      //*==========================================*
      var titulo = "";
      for(var i=1;i<=10;i++){
        titulo += numero[i];
        if(i % 4 == 0)
          titulo += " ";
      }
      return titulo += dig1 + dig2; //dois últimos digitos
    }


// Função para geração de Nomes
function geraNome(){
	var nomes = ['João', 'José', 'Allison', 'Arthur', 'Ana', 'Alex', 'Arlene', 'Alberto', 'Barry', 'Bertha', 'Bill', 'Bonnie', 'Bret', 'Beryl', 'Chantal', 'Cristobal', 'Claudette', 'Charley', 'Cindy', 'Chris', 'Dean', 'Dolly', 'Danny', 'Danielle', 'Dennis', 'Debby', 'Erin', 'Edouard', 'Erika', 'Earl', 'Emily', 'Ernesto', 'Felix', 'Fay', 'Fabian', 'Frances', 'Franklin', 'Florence', 'Gabielle', 'Gustavo', 'Grace', 'Gaston', 'Gert', 'Gordon', 'Humberto', 'Hanna', 'Henri', 'Hermine', 'Harvey', 'Helene', 'Iris', 'Isidore', 'Isabel', 'Ivan', 'Irene', 'Isaac', 'Jerry', 'Josephine', 'Juan', 'Jeanne', 'Jose', 'Joyce', 'Karen', 'Kyle', 'Kate', 'Karl', 'Katrina', 'Kirk', 'Lorenzo', 'Lili', 'Larry', 'Lisa', 'Lee', 'Leslie', 'Michelle', 'Marco', 'Mindy', 'Maria', 'Michael', 'Noel', 'Nana', 'Nicholas', 'Nicole', 'Nate', 'Nadine', 'Olga', 'Omar', 'Odette', 'Otto', 'Ophelia', 'Oscar', 'Pablo', 'Paloma', 'Peter', 'Paula', 'Philippe', 'Patty', 'Rebekah', 'Rene', 'Rose', 'Richard', 'Rita', 'Rafael', 'Sebastien', 'Sally', 'Sam', 'Shary', 'Stan', 'Sandy', 'Tanya', 'Teddy', 'Teresa', 'Tomas', 'Tammy', 'Tony', 'Van', 'Vicky', 'Victor', 'Virginie', 'Vince', 'Valerie', 'Wendy', 'Wilfred', 'Wanda', 'Walter', 'Wilma', 'William', 'Kumiko', 'Aki', 'Miharu', 'Chiaki', 'Michiyo', 'Itoe', 'Nanaho', 'Reina', 'Emi', 'Yumi', 'Ayumi', 'Kaori', 'Sayuri', 'Rie', 'Miyuki', 'Hitomi', 'Naoko', 'Miwa', 'Etsuko', 'Akane', 'Kazuko', 'Miyako', 'Youko', 'Sachiko', 'Mieko', 'Toshie', 'Junko', 'Silva', 'Ash', 'Jalmir', 'Rafael', 'Bruno', 'Daniel', 'Mariane', 'Andre', 'Diego'];
    var n = nomes.length - 1;
    var i = Math.round(Math.random()*n);
	return nomes[i];
}

// Função para geração de sobrenomes.
function geraSobrenome(){
	var sobrenomes = ['Cardoso', 'Chagas', 'Fernandes', 'Santana', 'Carvalho', 'Martins', 'Santos', 'Boaventura', 'Oliveira', 'Moraes', 'Leão', 'Garcia', 'Alves', 'Costa', 'Oliveira', 'Martinez', 'Novaes', 'Oliveira', 'Araújo', 'Maia', 'Vasconcelos', 'Gonçalves', 'Guimarães', 'Menezes', 'Sampaio', 'Cavalcante', 'Lacerda', 'Mello', 'Moraes', 'Muniz', 'Figueira', 'Paes', 'Lima', 'Marques', 'Duarte', 'Vasconcelos', 'Vieira', 'Souza', 'Soares', 'Silva', 'Duarte', 'Morais', 'Gomes', 'Paiva', 'Junqueira', 'Queiroz', 'Barreto', 'Menezzes', 'Campos', 'Pilar', 'Chaves', 'Paris', 'Lessa', 'Galisteu', 'Garcia', 'Frota', 'Araújo', 'Xavier', 'Ribeiro', 'Rodrigues', 'Freitas', 'Pinheiro', 'Moreira', 'Dias', 'Guimarães', 'Nogueira', 'Rocha', 'Albuquerque', 'Neves', 'Bernardes', 'Pereira', 'Camargo', 'Alencar', 'Batista', 'Andrade ', 'Reis', 'Amaral', 'Barcellos', 'Monteiro', 'Barreto', 'Frias', 'Medeiros', 'Gonçalves', 'Ferrari', 'Mesquita'];
	var i = generateRandomNumbers(sobrenomes.length - 1);
	var j = generateRandomNumbers(sobrenomes.length - 1);
	return sobrenomes[i] + " " + sobrenomes[j];
}

// Função para gerar o segmento das empresas.
function geraSegmento(){
	var segmentos = ['Agência De Publicidade', 'Alimentos', 'Artigos Esportivos', 'Autopeças', 'Auditoria', 'Consultoria', 'Bancos De Varejo', 'Bebidas Alcoólicas', 'Bebidas Não-Alcoólicas', 'Calçados', 'Cartão De Crédito', 'Cia Aérea', 'Construção E Incorporação', 'Construção Pesada', 'Derivado De Petróleo', 'Eletrodomésticos', 'Eletroeletrônicos', 'Equipamento De Telecomunicação', 'Fabricante De Material De Construção', 'Farmacêutico', 'Fast Food', 'Fiação E Tecelagem', 'Fornecedores De Energia', 'Hardware', 'Higiene E Limpeza Doméstica', 'Higiene Pessoal, Perfumaria E Cosméticos', 'Logística', 'Metalurgia E Siderurgia', 'Montadora/Importadora De Automóveis', 'Montadora/Importadora De Caminhões', 'Operadora De Telefonia Fixa', 'Operadora De Telefonia Móvel', 'Papel E Celulose', 'Petroquímica', 'Previdência Privada', 'Provedor De Internet', 'Química', 'Rede De Hotéis', 'Varejo Eletroeletrônicos', 'Varejo Material De Construção', 'Varejo Supermercados', 'Varejo Têxtil', 'Seguradoras', 'Software', 'Vestuário E Confecção', 'Contact Center', 'Redes Sociais', 'Mineração'];
	var i = generateRandomNumbers(segmentos.length - 1);
	return segmentos[i];
}

// Função para geração de razão social
function geraRazaoSocial(nome, sobrenome){
	var segmento = geraSegmento();
	var nomeEmpresa = nome + " " + sobrenome;
	var tipo = ['MEI', 'ME', 'EPP', 'EI', 'EIRELI', 'LTDA', 'SA'];
	var i = generateRandomNumbers(tipo.length - 1);
	return nomeEmpresa + " " + segmento + " " + tipo[i];
}

// Função para gerar inscrição estadual.
function geraInscricaoEstadual() {
    var siglas = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO", "SSP"];
    var i = generateRandomNumbers(siglas.length - 1);
    var estadoEmpresa = siglas[i];
    // Vai imprimir a Inscrição Estadual com máscara?
    var mask = false;

    var ie = 'Isento';
    switch(estadoEmpresa) {
        case 'AC':
        var n = 9;
        var n1 = 0;
        var n2 = 1;
        var n3 = generateRandomNumbers(n);
        var n4 = generateRandomNumbers(n);
        var n5 = generateRandomNumbers(n);
        var n6 = generateRandomNumbers(n);
        var n7 = generateRandomNumbers(n);
        var n8 = generateRandomNumbers(n);
        var n9 = generateRandomNumbers(n);
        var n10 = generateRandomNumbers(n);
        var n11 = generateRandomNumbers(n);
        var digit1 = n11*2+n10*3+n9*4+n8*5+n7*6+n6*7+n5*8+n4*9+n3*2+n2*3+n1*4;
        d1 = 11 - (mod(d1,11));
        if (d1>=10) d1 = 0;
        var d2 = d1*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5;
        d2 = 11 - (mod(d2,11));
        if (d2>=10) d2 = 0;
        if (mask) {
           ie = ''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+n8+'.'+n9+n10+n11+'-'+d1+d2;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11+d1+d2;
        }
          break;
        case 'AL':
        var n = 9;
        var n1  = 2;
        var n2  = 4;
        var n3  = generateRandomNumbers(4);
        if(n3 == 0) {
          n3 = 0;
        }
        else if(n3 == 1) {
          n3 = 3;
        }
        else if(n3 == 2) {
          n3 = 5;
        }
        else if(n3 == 3) {
          n3 = 7;
        }
        else if(n3 == 4) {
          n3 = 8;
        }
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
        var n8  = generateRandomNumbers(n);
                var d1 = n8*2+n7*3+n6*4+n5*5+n4*6+n3*7+n2*8+n1*9;
          d2 = mod(d1,11);
        d2 = 11 - (mod(d1,11));
        if (d2>=10) {
           d2 = 0;
        }
        ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+d2;
          break;
        case 'AP':
        var n = 9;
        var n1  = 0;
        var n2  = 3;
        var n3  = generateRandomNumbers(n);
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
        var n8  = generateRandomNumbers(n);
                var d1 = n8*2+n7*3+n6*4+n5*5+n4*6+n3*7+n2*8+n1*9;
          d2 = mod(d1,11);
        d2 = 11 - (mod(d1,11));
        if (d2>=10) {
           d2 = 0;
        }
        ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+d2;
          break;
        case 'AM':
        var n = 9;
        var n1  = generateRandomNumbers(n);
        var n2  = generateRandomNumbers(n);
        var n3  = generateRandomNumbers(n);
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
        var n8  = generateRandomNumbers(n);
                var d1 = n8*2+n7*3+n6*4+n5*5+n4*6+n3*7+n2*8+n1*9;
          d2 = mod(d1,11);
        d2 = 11 - (mod(d1,11));
        if (d2>=10) {
           d2 = 0;
        }
        if (mask) {
           ie = ''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+n8+'-'+d2;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+d2;
        }
          break;
        case 'BA':
        var n = 9;
        var n1 = generateRandomNumbers(n);
        var n2 = generateRandomNumbers(n);
        var n3 = generateRandomNumbers(n);
        var n4 = generateRandomNumbers(n);
        var n5 = generateRandomNumbers(n);
        var n6 = generateRandomNumbers(n);
        var d1 = n6*2+n5*3+n4*4+n3*5+n2*6+n1*7;
        d1 = 11 - (mod(d1,11));
        if (d1>=10) d1 = 0;
        var d2 = d1*2+n6*3+n5*4+n4*5+n3*6+n2*7+n1*8;
        d2 = 11 - (mod(d2,11));
        if (d2>=10) d2 = 0;
        if (mask) {
           ie = ''+n1+n2+n3+n4+n5+n6+'-'+d1+d2;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+d1+d2;
        }
          break;
        case 'CE':
        var n = 9;
        var n1  = generateRandomNumbers(n);
        var n2  = generateRandomNumbers(n);
        var n3  = generateRandomNumbers(n);
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
        var n8  = generateRandomNumbers(n);
        var d1 = n8*2+n7*3+n6*4+n5*5+n4*6+n3*7+n2*8+n1*9;
        d2 = mod(d1,11);
        d2 = 11 - (mod(d1,11));
        if (d2>=10) {
           d2 = 0;
        }
        if (mask) {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+'-'+d2;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+d2;
        }
          break;
        case 'DF':
        var n = 9;
        var n1 = 0;
        var n2 = 7;
        var n3 = generateRandomNumbers(n);
        var n4 = generateRandomNumbers(n);
        var n5 = generateRandomNumbers(n);
        var n6 = generateRandomNumbers(n);
        var n7 = generateRandomNumbers(n);
        var n8 = generateRandomNumbers(n);
        var n9 = generateRandomNumbers(n);
        var n10 = generateRandomNumbers(n);
        var n11 = generateRandomNumbers(n);
        var d1 = n11*2+n10*3+n9*4+n8*5+n7*6+n6*7+n5*8+n4*9+n3*2+n2*3+n1*4;
        d1 = 11 - (mod(d1,11));
        if (d1>=10) d1 = 0;
        var d2 = d1*2+n11*3+n10*4+n9*5+n8*6+n7*7+n6*8+n5*9+n4*2+n3*3+n2*4+n1*5;
        d2 = 11 - (mod(d2,11));
        if (d2>=10) d2 = 0;
        if (mask) {
           ie = ''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+n8+'.'+n9+n10+n11+'-'+d1+d2;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11+d1+d2;
        }
          break;
        case 'ES':
        var n = 9;
        var n1  = generateRandomNumbers(n);
        var n2  = generateRandomNumbers(n);
        var n3  = generateRandomNumbers(n);
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
        var n8  = generateRandomNumbers(n);
                var d1 = n8*2+n7*3+n6*4+n5*5+n4*6+n3*7+n2*8+n1*9;
          d2 = mod(d1,11);
        d2 = 11 - (mod(d1,11));
        if (d2>=10) {
           d2 = 0;
        }
        if (mask) {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+'-'+d2;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+d2;
        }
          break;
        case 'GO':
        var n = 9;
        var n1  = generateRandomNumbers(n);
        var n2  = generateRandomNumbers(n);
        var n3  = generateRandomNumbers(n);
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
        var n8  = generateRandomNumbers(n);
                var d1 = n8*2+n7*3+n6*4+n5*5+n4*6+n3*7+n2*8+n1*9;
          d2 = mod(d1,11);
        d2 = 11 - (mod(d1,11));
        if (d2>=10) {
           d2 = 0;
        }
        if (mask) {
           ie = ''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+n8+'-'+d2;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+d2;
        }
          break;
        case 'MA':
        var n = 9;
        var n1  = 1;
        var n2  = 2;
        var n3  = generateRandomNumbers(n);
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
        var n8  = generateRandomNumbers(n);
                var d1 = n8*2+n7*3+n6*4+n5*5+n4*6+n3*7+n2*8+n1*9;
          d2 = mod(d1,11);
        d2 = 11 - (mod(d1,11));
        if (d2>=10) {
           d2 = 0;
        }
        ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+d2;
          break;
        case 'MS':
        var n = 9;
        var n1  = generateRandomNumbers(n);
        var n2  = generateRandomNumbers(n);
        var n3  = generateRandomNumbers(n);
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
        var n8  = generateRandomNumbers(n);
        var n9  = generateRandomNumbers(n);
        var n10  = generateRandomNumbers(n);
                var d1 = n10*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*2+n1*3;
          d2 = mod(d1,11);
        d2 = 11 - (mod(d1,11));
        if (d2>=10) {
           d2 = 0;
        }
        if (mask) {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+'-'+d2;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+d2;
        }
          break;
        case 'MT':
        var n = 9;
        var n1  = generateRandomNumbers(n);
        var n2  = generateRandomNumbers(n);
        var n3  = generateRandomNumbers(n);
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
        var n8  = generateRandomNumbers(n);
        var n9  = generateRandomNumbers(n);
        var n10  = generateRandomNumbers(n);
                var d1 = n10*2+n9*3+n8*4+n7*5+n6*6+n5*7+n4*8+n3*9+n2*2+n1*3;
          d2 = mod(d1,11);
        d2 = 11 - (mod(d1,11));
        if (d2>=10) {
           d2 = 0;
        }
        if (mask) {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+'-'+d2;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+d2;
        }
          break;
        case 'MG':
          break;
        case 'PA':
        var n = 9;
        var n1  = generateRandomNumbers(n);
        var n2  = generateRandomNumbers(n);
        var n3  = generateRandomNumbers(n);
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
        var n8  = generateRandomNumbers(n);
                var d1 = n8*2+n7*3+n6*4+n5*5+n4*6+n3*7+n2*8+n1*9;
          d2 = mod(d1,11);
        d2 = 11 - (mod(d1,11));
        if (d2>=10) {
           d2 = 0;
        }
        if (mask) {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+'-'+d2;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+d2;
        }
          break;
        case 'PB':
        var n = 9;
        var n1  = generateRandomNumbers(n);
        var n2  = generateRandomNumbers(n);
        var n3  = generateRandomNumbers(n);
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
        var n8  = generateRandomNumbers(n);
                var d1 = n8*2+n7*3+n6*4+n5*5+n4*6+n3*7+n2*8+n1*9;
          d2 = mod(d1,11);
        d2 = 11 - (mod(d1,11));
        if (d2>=10) {
           d2 = 0;
        }
        if (mask) {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+'-'+d2;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+d2;
        }
          break;
        case 'PR':
        var n = 9;
        var n1  = generateRandomNumbers(n);
        var n2  = generateRandomNumbers(n);
        var n3  = generateRandomNumbers(n);
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
        var n8  = generateRandomNumbers(n);
                var d1 = n8*2+n7*3+n6*4+n5*5+n4*6+n3*7+n2*8+n1*9;
        d1 = 11 - (mod(d1,11));
        if (d1>=10) d1 = 0;
        var d2 = d1*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*2+n2*3+n1*4;
        d2 = 11 - (mod(d2,11));
        if (d2>=10) d2 = 0;
        if (mask) {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+'-'+d1+d2;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+d1+d2;
        }
          break;
        case 'PE':
        var n = 9;
        var n1  = generateRandomNumbers(n);
        var n2  = generateRandomNumbers(n);
        var n3  = generateRandomNumbers(n);
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
                var d1 = n7*2+n6*3+n5*4+n4*5+n3*6+n2*7+n1*8;
        d1 = 11 - (mod(d1,11));
        if (d1>=10) d1 = 0;
        var d2 = d1*2+n7*3+n6*4+n5*5+n4*6+n3*7+n2*8+n1*9;
        d2 = 11 - (mod(d2,11));
        if (d2>=10) d2 = 0;
        if (mask) {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+'-'+d1+d2;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+d1+d2;
        }
          break;
        case 'PI':
        var n = 9;
        var n1  = generateRandomNumbers(n);
        var n2  = generateRandomNumbers(n);
        var n3  = generateRandomNumbers(n);
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
        var n8  = generateRandomNumbers(n);
                var d1 = n8*2+n7*3+n6*4+n5*5+n4*6+n3*7+n2*8+n1*9;
          d2 = mod(d1,11);
        d2 = 11 - (mod(d1,11));
        if (d2>=10) {
           d2 = 0;
        }
        if (mask) {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+'-'+d2;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+d2;
        }
          break;
        case 'RJ':
        var n = 9;
        var n1  = generateRandomNumbers(n);
        var n2  = generateRandomNumbers(n);
        var n3  = generateRandomNumbers(n);
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
        var n8  = generateRandomNumbers(n);
                var d1 = n7*2+n6*3+n5*4+n4*5+n3*6+n2*7+n1*2;
          d2 = mod(d1,11);
        d2 = 11 - (mod(d1,11));
        if (d2>=10) {
           d2 = 0;
        }
        if (mask) {
           ie = ''+n1+n2+'.'+n3+n4+n5+'.'+n6+n7+'-'+d2;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+d2;
        }
          break;
        case 'RN':
          break;
        case 'RS':
        var n = 9;
        var n1  = generateRandomNumbers(n);
        var n2  = generateRandomNumbers(n);
        var n3  = generateRandomNumbers(n);
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
        var n8  = generateRandomNumbers(n);
        var n9  = generateRandomNumbers(n);
        var d1 = n9*2+n8*3+n7*4+n6*5+n5*6+n4*7+n3*8+n2*9+n1*2;
        d2 = 11 - (mod(d1,11));
        if (d2>=10) {
           d2 = 0;
        }
        if (mask) {
           ie = ''+n1+n2+n3+'/'+n4+n5+n6+n7+n8+n9+d2;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+d2;
        }
          break;
        case 'RO':
        var n = 9;
        var n1 = 0;
        var n2 = 7;
        var n3 = generateRandomNumbers(n);
        var n4 = generateRandomNumbers(n);
        var n5 = generateRandomNumbers(n);
        var n6 = generateRandomNumbers(n);
        var n7 = generateRandomNumbers(n);
        var n8 = generateRandomNumbers(n);
        var n9 = generateRandomNumbers(n);
        var n10 = generateRandomNumbers(n);
        var n11 = generateRandomNumbers(n);
        var n12 = generateRandomNumbers(n);
        var n13 = generateRandomNumbers(n);
        var d1 = n13*2+n12*3+n11*4+n10*5+n9*6+n8*7+n7*8+n6*9+n5*2+n4*3+n3*4+n2*5+n1*6;
        d1 = 11 - (mod(d1,11));
        if (d1>=10) d1 = 0;
        if (mask) {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11+n12+n13+'-'+d1;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+n9+n10+n11+n12+n13+d1;
        }
          break;
        case 'RR':
        var n = 9;
        var n1  = generateRandomNumbers(n);
        var n2  = generateRandomNumbers(n);
        var n3  = generateRandomNumbers(n);
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
        var n8  = generateRandomNumbers(n);
                var d1 = n8*8+n7*7+n6*6+n5*5+n4*4+n3*3+n2*2+n1*1;
        d1 = 11 - (mod(d1,11));
        if (d1>=10) d1 = 0;
        if (mask) {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+'-'+d1;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+d1;
        }
          break;
        case 'SC':
        var n = 9;
        var n1  = generateRandomNumbers(n);
        var n2  = generateRandomNumbers(n);
        var n3  = generateRandomNumbers(n);
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
        var n8  = generateRandomNumbers(n);
                var d1 = n8*2+n7*3+n6*4+n5*5+n4*6+n3*7+n2*8+n1*9;
        d2 = 11 - (mod(d1,11));
        if (d2>=10) {
           d2 = 0;
        }
        if (mask) {
           ie = ''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+d2;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+d2;
        }
          break;
        case 'SP':
        var n = 9;
        var n1  = generateRandomNumbers(n);
        var n2  = generateRandomNumbers(n);
        var n3  = generateRandomNumbers(n);
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
        var n8  = generateRandomNumbers(n);
        var n10  = generateRandomNumbers(n);
        var n11  = generateRandomNumbers(n);
                var d1 = n8*10+n7*8+n6*7+n5*6+n4*5+n3*4+n2*3+n1*1;
        d1 = 11 - (mod(d1,11));
        if (d1>=10) d1 = 0;
        var d2 = n11*2+n10*3+d1*4+n8*5+n7*6+n6*7+n5*8+n4*9+n3*10+n2*2+n1*3;
        d2 = 11 - (mod(d2,11));
        if (d2>=10) d2 = 0;
        if (mask) {
           ie = ''+n1+n2+n3+'.'+n4+n5+n6+'.'+n7+n8+d1+'.'+n10+n11+d2;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+d1+n10+n11+d2;
        }
          break;
        case 'SPP':
        var n = 9;
        var n1  = 0;
        var n2  = generateRandomNumbers(n);
        var n3  = generateRandomNumbers(n);
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
        var n8  = generateRandomNumbers(n);
        var n10  = generateRandomNumbers(n);
        var n11  = generateRandomNumbers(n);
        var n12  = generateRandomNumbers(n);
                var d1 = n8*10+n7*8+n6*7+n5*6+n4*5+n3*4+n2*3+n1*1;
        d1 = 11 - (mod(d1,11));
        if (d1>=10) d1 = 0;
        if (mask) {
           ie = ''+'P-'+n1+n2+n3+n4+n5+n6+n7+n8+'.'+d1+'/'+n10+n11+n12;
        }
        else {
           ie = ''+'P'+n1+n2+n3+n4+n5+n6+n7+n8+d1+n10+n11+n12;
        }
          break;
        case 'SE':
        var n = 9;
        var n1  = generateRandomNumbers(n);
        var n2  = generateRandomNumbers(n);
        var n3  = generateRandomNumbers(n);
        var n4  = generateRandomNumbers(n);
        var n5  = generateRandomNumbers(n);
        var n6  = generateRandomNumbers(n);
        var n7  = generateRandomNumbers(n);
        var n8  = generateRandomNumbers(n);
                var d1 = n8*2+n7*3+n6*4+n5*5+n4*6+n3*7+n2*8+n1*9;
          d2 = mod(d1,11);
        d2 = 11 - (mod(d1,11));
        if (d2>=10) {
           d2 = 0;
        }
        if (mask) {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+'-'+d2;
        }
        else {
           ie = ''+n1+n2+n3+n4+n5+n6+n7+n8+d2;
        }
          break;
        case 'TO':
          break;
    }
    return ie;
}

function geraDataNascimento(){
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
