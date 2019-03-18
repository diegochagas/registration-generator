# Registration Generator

JavaScript functions to generate random registrations for developers that are doing test end-to-end with Selenium or other frameworks.

## Technologies used
- JavaScript

## Generate brazilian CPF

Function to generate a brazilian CPF ('Cadastro de Pessoa Física' or 'Individual Registration in English').

`generateBrazilianCPF() = "00000000000"`

with mask

`generateBrazilianCPF(true) = "000.000.000-00"`

## Generate brazilian CNPJ

Function to generate a brazilian CNPJ ('Cadastro Nacional de Pessoa Jurídica' or National Register of Legal Entities in English).

`generateBrazilianCNPJ() = "00000000000100"`

with mask

`generateBrazilianCNPJ(true) = "00.000.000/0001-00"`

## Generate brazilian titulo de eleitor

Function to generate a brazilian titulo de eleitor (Voter's title in English).

`generateBrazilianTituloDeEleitor() = "000000000000"`

with mask

`generateBrazilianTituloDeEleitor(true) = "0000 0000 0000"`

## Generate name

Function to generate names.

`generateName() = "John"`

## Generate family name

Function to generate family names.

`generateFamilyName() = "Smith"`

## Generate work segment

Function to generate a work segment. The segments are in Portuguese.

`generateWorkSegment() = "Development"`

## Generate razão social

Function to generate the razão social (business name in English). The names are in Portuguese.

`generateRazaoSocial() = "Example FullName and Work Segment ME"`

## Generate brazilian Inscrição Estadual

Function to generate a brazilian Inscrição Estadual (state registration of a company in English).

`generateInscricaoEstadual() = "000000000000"`

with mask

`generateInscricaoEstadual(true) = "00.000.000-0"`

This function can generate too the result 'Isento', that means the company is free os taxs.

`generateInscricaoEstadual() = "Isento"`

## Generate date

Function to generate a object containing date informations. By default the function return a date between 1900 and the actual year.

`generateDate() = {day: "00", month: "00", year: 0000, date: "00000000", dateWithMask: "00/00/0000"}`

You can specify a start year.

`generateDate(2017) = {day: "00", month: "00", year: 2019, date: "00002019", dateWithMask: "00/00/2019"}`

And an end year.

`generateDate(2017, 2018) = {day: "00", month: "00", year: 2018, date: "00002018", dateWithMask: "00/00/2018"}`

## Generate company website

Function to generate the company website.

`generateCompanyWebsite() = "www.example.com.br"`

You can specify wether is not a brazilian website.

`generateCompanyWebsite(false) = "www.example.com"`

## Generate CEP

Function to generate an object containig information about the CEP ('Código de Endereçamento Postal', or ZIP code in English). The zip codes are from Brazil. In the object, you can select the whole code, or you can select the separeted infroamtions as local and identifier.

`generateCEP() = {fullCEP: "00000000", local: "00000", identifier: "000"}`

## Generate address complement

Function to generate an address complement. The complements are in Portuguese.

`generateAddressComplement() = "House A"`

## Generate email

Function to generate an email.

`generateEmail() = "example@example.com.br"`

## Generate company email

Function to generate the company email.

`generateCompanyEmail() = "example@example.com.br"`

You can specify wether is not a brazilian email.

`generateCompanyEmail(false) = "example@example.com"`

## Generate password

Function to generate a password.

`generatePassword() = "1bcdef78"`

By default this function generates a password with 8 characteres, but you can define a specific number.

`generatePassword(6) = "1bcde6"`

## Generate brazilian RG

Function to generate a brazilian RG ('Registro Geral' or General Registration in English).

`generateRG() = "000000000"`

with mask

`generateRG(true) = "00.000.000-0"`

## Generate telephone

Function to generate a telephone.

`generateTelephone() = "+550030000000"`

with mask

`generateTelephone(true) = "+55(00)3000-0000"`

## Generate cellphone

Function to generate a cellphone.

`generateCellphone() = "+5500900000000"`

with mask

`generateCellphone(true) = "+55(00)90000-0000"`

## Generate credit card

Function to generate a object containing credit card informations.

`generateCreditCard() = {flag: "Flag", creditCardNumber: "000000000000000", CVC: 000, expirationDate: "00/0000"}`
