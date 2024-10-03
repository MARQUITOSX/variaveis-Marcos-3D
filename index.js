//Futuro
const prompt = require ('prompt-sync');
const entrada = prompt ();


let anoAtual = 2024;
const nomeCompleto = "Marcos Vinicius";
let idade = 17;
const cursoFaculdade = "Ciências da Computação";
let cidadeAtual = "SJP";

console.log(`Olá, eu sou o ${nomeCompleto}, eu tenho ${idade} anos, moro em ${cidadeAtual} , quero ano que vem estar cursando ${cursoFaculdade}`);

anoAtual = 2025;
idade = 18;
cidadeAtual = "Balneário Camboriú"
console.log(`Para meu ano que vem, meu nome ainda será ${nomeCompleto}, minha idade vai ser ${idade} anos, pretendo estar morando em ${cidadeAtual} e espero cursar ${cursoFaculdade}. `);


// Agencia de viagens
console.log("-----------------");
console.log("      LOGIN      ")
console.log("-----------------");

const loginCerto = "Marcos";
const senhaCerta = 252007;

var login = entrada("Digite seu login: ");
var senha = entrada("Digite sua senha: ");

while (login != loginCerto){
  console.log("Usuario não encontrado")
  login = entrada("Digite novamente seu login: ");
    }
while (senha != senhaCerta){
  console.log("senha não encontrada")
  senha = entrada("Digite novamente sua senha: ");
    }

var nomeComprador = entrada("Qual seu nome? ");
var cpfComprador = entrada("Qual seria seu cpf? ");
var idadeComprador = entrada("Qual é sua idade? ");
const listaDeDestino = new Array(
  " Capão Raso",
  " Colombo",
  " Piraquara",
" Campo Magro",
" Araucaria"
);

console.log(`Olá senhor ${nomeComprador}, portador do cpf ${cpfComprador}, confirmado a idade de ${idadeComprador} anos, sua lista de destino são: ${listaDeDestino}? qual dos destinos podemos confirmar?`);
console.log(listaDeDestino[0]);
console.log("");
console.log(`Olá senhor ${nomeComprador}, adicionamos mais um destino à sua lista de interesses.`);

listaDeDestino.push("Osasco");

var idadeComprador = '';

if (idadeComprador < 18){
console.log(`Infelizmente não podemos vender a passagem, pois o senhor(a) ser menor de idade `);
}

if (idadeComprador > 18){
console.log(`Parabéns, sua idade foi verificada, e aprovada com sucesso! verifique também outros lugares de interrese da sua lista como: ${listaDeDestino}`);
}















