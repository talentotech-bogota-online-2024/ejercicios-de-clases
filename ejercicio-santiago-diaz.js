// Santiago Diaz:
//* Cúal es la probabilidad de que la suma de 2 dados sea divisible entre 3?

// Solucion Mikán
() => {
  //Asignando funcion
  function calcularProbabilidadDivisibleEntre3(numCaras) {
    //Definir las variable entre, inicializar el contador de posibilidades e inicializar el contador de casos exitosos
    let totalPosibilidades = 0;
    let totalExitos = 0;

    //Recorriendo por ciclos, contar todas las posibles combinaciones de datos
    for (let i = 1; i <= numCaras; i++) {
      for (let j = 1; j <= numCaras; j++) {
        totalPosibilidades++;

        // Iniciando con el condicional, contar las combinaciones donde la suma es divisible entre 3
        if ((i + j) % 3 === 0) {
          totalExitos++;
        }
      }
    }

    //Almacenando las dos varibles para la operacion de division y que me devuelva el valor de la probabilidad
    let probabilidad = totalExitos / totalPosibilidades;
    return probabilidad;
  }

  //Definiendo las dos variables de los dados para calcular la probabilidad
  let carasDados = parseInt(
    prompt("Ingrese el numero de caras en los dados: ")
  );
  let resultado = calcularProbabilidadDivisibleEntre3(carasDados);

  //Imprimir
  console.log(
    "La probabilidad de que la suma de dos datos sea divisible entre 3 es: " +
      resultado
  );

  /*Finalizacion de la solucion Mikán*/
};
