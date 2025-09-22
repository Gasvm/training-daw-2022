// Declarar un array numérico (entero) y crear un método que imprima:
// La suma de todos los elementos
// El elemento más grande
// El elemento más pequeño
// La media de los elementos



function doCalculation(array) {

    //Creo una variable externa 
    let suma = 0;
    let max = array[0]

    //Cada vez que paso un valor del array voy sumando el valor
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        suma += array[i]
    //si el valor base es menor que el comparado se guarda como el nuevo
        if (array[i] > max) {
            max = array[i]
        }
    }

    console.log(`Suma del array ${suma}`);
    console.log(`Promedio del array ${suma / array.length}`);
    console.log(`Máximo del array ${max}`);
    
}



doCalculation([1, 2, 3, 4])
doCalculation([5, 5, 5, 5])
doCalculation([1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5])