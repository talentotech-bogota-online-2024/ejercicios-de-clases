// Walford
//* un balde (arreglo) con 4 bolas rojas, 3 blancas y 2 azules, cual es la probailidad de que salga blanca?

// Solucion Mikán
() => {
  let bolasBlancas = 3;
  let totalBolas = 4 + 3 + 2;

  let probabilidadBlanca = (bolasBlancas / totalBolas) * 100;
  console.log(
    "La probabilidad de que salga una bola blanca es: " +
      probabilidadBlanca +
      "%"
  );
};

//luis Miguel
() => {
  let bolasRojas = parseInt(prompt("ingresa la cantidad de bolas rojas"));
  let bolasBlancas = parseInt(prompt("ingresa la cantidad de bolas blancas"));
  let bolasAzules = parseInt(prompt("ingresa la cantidad de bolas azules"));

  let suma = bolasRojas + bolasBlancas + bolasAzules;
  let probabilidadRojas = (bolasRojas / suma) * 100;
  let probabilidadBlancas = (bolasBlancas / suma) * 100;
  let probabilidadAzules = (bolasAzules / suma) * 100;

  console.log(
    "la probabilidad hay que salgan las rojas: " + probabilidadRojas + "%"
  );
  console.log(
    "la probabilidad hay que salgan las Blancas: " + probabilidadBlancas + "%"
  );
  console.log(
    "la probabilidad hay que salgan las Blancas: " + probabilidadAzules + "%"
  );
};

//Juan Camilo Solucion
() => {
  let bolasblancas = parseInt(prompt("ingrese cuantas  bolas blancas hay"));
  let bolasazules = parseInt(prompt("ingrese cuantas  bolas azulues hay"));
  let bolasrojas = parseInt(prompt("ingrese cuantas  bolas rojas hay"));
  let usua = parseInt(
    prompt(
      "Ingrese un numero dependiendo que probabilidad quiere saber 1.Blancas 2.Azules 3.Rojas 4.Todas las probabilidades"
    )
  );
  let totalbolas = bolasazules + bolasblancas + bolasrojas;
  let pa = (bolasazules / totalbolas) * 100;
  let pb = (bolasblancas / totalbolas) * 100;
  let pr = (bolasrojas / totalbolas) * 100;
  if (usua == 1) {
    console.log("La probabilidad de que saque una bola blanca es " + pb + "%");
  }
  if (usua == 2) {
    console.log("La probabilidad de que saque una bola azul es " + pa + "%");
  }
  if (usua == 3) {
    console.log("La probabilidad de que saque una bola blanca es " + pr + "%");
  }
  if (usua == 4) {
    console.log(
      "La probabilidad de que saque una bola blanca, azul y roja es " +
        pb +
        "%, " +
        pa +
        "%, " +
        pr +
        "% sucesivamente"
    );
  }
};

// Daniel Palma
() => {
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
    }
    calcular_probabilidad();
  }
  calcular_probabilidad();
};
