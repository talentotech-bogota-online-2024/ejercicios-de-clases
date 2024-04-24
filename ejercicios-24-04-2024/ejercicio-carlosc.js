/*
 * Carlos C: Probabilidad de estar entre los 10 primeros en la fila de un concierto
 * O la probabilidad de encontrar la aguja en el pajar
*/

// jEIMMY--SUPONIENDO QUE HAY UN TOTAL DE 100 PERSONAS EN LA FILA...
() => {
    let PosicionFila = 10;
    let TotalPersonas = 100;
    if (PosicionFila <= 0 || PosicionFila > TotalPersonas) {
      console.log("La posición de la fila no es válida.");
    } else {
      let probabilidad = (PosicionFila / TotalPersonas) * 100;
      console.log(
        "La probabilidad de estar entre los primeros 10 es: " +
          probabilidad.toFixed(2) +
          "%"
      ); // .Fixed hace que sean solo 2 numeros en posicion
    }
}
