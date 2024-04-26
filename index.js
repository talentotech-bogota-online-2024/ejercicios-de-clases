let info = [];
function calcular_probabilidad() {
  let color = prompt("Ingresa el color de las bolas");
  let numero = Number.parseInt(
    prompt("Ingresa la cantidad de bolas de ese color")
  );

  info.push({ color, numero });

  let confirmacionSumar = prompt("Calcular probabilidades?");
  if (confirmacionSumar.toLowerCase() == "si") {
    let sumaBolas = 0;
    for (const infoColor in info) {
      if (Object.hasOwnProperty.call(info, infoColor)) {
        const element = info[infoColor];
        sumaBolas += element.numero;
      }
    }
    for (const infoColor in info) {
      if (Object.hasOwnProperty.call(info, infoColor)) {
        const element = info[infoColor];
        console.log(
          "la probabilidad de salir de color ",
          element.color,
          " es: ",
          (element.numero / sumaBolas) * 100,
          "%"
        );
      }
    }
    return;
  }
  calcular_probabilidad();
}
calcular_probabilidad();
