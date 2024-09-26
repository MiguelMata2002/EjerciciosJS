let people = [
    { name: "Bob", id: 1 },
    { name: "john", id: 2 },
    { name: "alex", id: 3 },
    { name: "john", id: 3 }
];

let nameCount = {};

// Contar las ocurrencias de cada nombre
for (let i = 0; i < people.length; i++) {
    let name = people[i].name.toLowerCase(); // Normalizar a minúsculas
    if (nameCount[name]) {
        nameCount[name]++;
    } else {
        nameCount[name] = 1;
    }
}

// Mostrar los resultados
for (let name in nameCount) {
    console.log(`${name}: ${nameCount[name]}`);
}