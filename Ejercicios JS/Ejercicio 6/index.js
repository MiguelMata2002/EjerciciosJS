var object={
    key1:10,
    key2:3,
    key3:40,
    key4:20
}
function ordenarValores(obj){
    const entradas=Object.entries(obj)//convierte el objeto en un arreglo clave valor
    entradas.sort((a,b)=>a[1]-b[1])//ordena el arreglo segun los valores
    return entradas.map(entry=>entry[0])//extrae solo las claves del arreglo
}
const clavesOrdenas=ordenarValores(object);
console.log(clavesOrdenas)