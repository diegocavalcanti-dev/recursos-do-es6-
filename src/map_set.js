let meuMap = new Map();
meuMap.set("nome", "diego");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

meuMap.size
console.log(meuMap.size)

console.log(meuMap.has("sobrenome"))

// meuMap.clear()

console.log(meuMap.size)

for ( let chave of meuMap.keys()) {
    console.log(chave);
}

for ( let valor of meuMap.values()) {
    console.log(valor);
}

for ( let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap)

// [nome => diego]
// [stack => html, css, js]

const cpfs = new Set();

cpfs.add('42090650845')
cpfs.add('42091230845')
cpfs.add('42093210845')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor);
})

// Código abaixo é muito importante para a carreira de FRONT END:
const array = ['Diego Cavalcanti', 'Jose Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Diego Cavalcanti']

const arrayComoSet = new Set([...array])

const arraySemItensDuplicados = [...arrayComoSet]

console.log(arrayComoSet)
console.log(arraySemItensDuplicados)
