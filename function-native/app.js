// ===== Functions Nativas =====

// parseInt e parseFloat, type
const numeroInformado = '23';
// const numeroInformado = 'Teste';
console.log(numeroInformado);

// const soma = parseInt(numeroInformado) + 5;
// const soma = numeroInformado + 5;
// const soma = +numeroInformado + 5; // atalho
// const soma = numeroInformado - 5;
const soma = Number(numeroInformado) + 5;
console.log(soma);
// console.log(parseInt(true)); // NaN

// const num2 = 9;

// if (isNaN(numeroInformado)) {
//     console.log("Não é um número");
    
// } else {
//     console.log("É um número");
// }

// Locale
const valor = 150;
const desconto = 10;
const valorFinal = "PAUSA";

console.log(`O valor é R$ ${valor}`);

// Como saber se um número é par
const idade = 0;

// Exercício: verificar se o número informado é Zero, Par ou Impar
if (idade == 0) {
    console.log('Zero');

} else if (idade % 2 == 0) {
    console.log('Par');
    
} else {
    console.log('Ímpar');
}



/*
Principais funções nativas do JavaScript por categorias:

=== String Methods:

charAt()
charCodeAt()
concat()
endsWith()
includes()
indexOf()
lastIndexOf()
match()
padEnd()
padStart()
repeat()
replace()
replaceAll()
search()
slice()
split()
startsWith()
substr()
substring()
toLowerCase()
toUpperCase()
trim()
trimStart()
trimEnd()



=== Array Methods:

concat()
copyWithin()
entries()
every()
fill()
filter()
find()
findIndex()
flat()
flatMap()
forEach()
includes()
indexOf()
join()
keys()
lastIndexOf()
map()
pop()
push()
reduce()
reduceRight()
reverse()
shift()
slice()
some()
sort()
splice()
unshift()
values()



=== Number Methods:

isInteger()
isNaN()
isSafeInteger()
parseFloat()
parseInt()
toExponential()
toFixed()
toPrecision()
toString()



=== Math Object Methods:

abs()
ceil()
floor()
max()
min()
pow()
random()
round()
sign()
sqrt()
trunc()


=== Object Methods:

assign()
create()
defineProperty()
entries()
freeze()
fromEntries()
getOwnPropertyDescriptor()
getOwnPropertyNames()
hasOwn()
is()
isExtensible()
isFrozen()
keys()
preventExtensions()
seal()
values()



=== Date Methods:

getDate()
getDay()
getFullYear()
getHours()
getMilliseconds()
getMinutes()
getMonth()
getSeconds()
getTime()
setDate()
setFullYear()
setHours()
setMilliseconds()
setMinutes()
setMonth()
setSeconds()
toDateString()
toISOString()
toJSON()
toLocaleDateString()
toLocaleTimeString()
toString()
valueOf()



=== Global Functions:

decodeURI()
decodeURIComponent()
encodeURI()
encodeURIComponent()
eval()
isFinite()
isNaN()
parseFloat()
parseInt()



=== Promise Methods:

all()
allSettled()
any()
race()
reject()
resolve()
then()
catch()
finally()



=== JSON Methods:

parse()
stringify()



=== Console Methods:

assert()
clear()
count()
debug()
error()
info()
log()
table()
time()
timeEnd()
trace()
warn()
*/