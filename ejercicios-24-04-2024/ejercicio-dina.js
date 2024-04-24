// * Dina :Si eliges al azar una letra del alfabeto, ¿cuál es la probabilidad de seleccionar una vocal?
// Dina
() => {
  let letras = 27;
  let vocales = 5;

  let probabilidad = (vocales / letras) * 100;

  console.log("La probabilidad es", probabilidad);
};
//laura
() => {
  const alfabeto = "abcdefghijklmnopqrstuvwxyz";

  const letraAleatoria = alfabeto[Math.floor(Math.random() * alfabeto.length)];

  const totalVocales = ["a", "e", "i", "o", "u"].length;
  const totalLetras = alfabeto.length;

  const probabilidadVocal = totalVocales / totalLetras;

  if (["a", "e", "i", "o", "u"].includes(letraAleatoria.toLowerCase())) {
    console.log(`La letra aleatoria "${letraAleatoria}" es una vocal.`);
    console.log(`Probabilidad de seleccionar una vocal: ${probabilidadVocal}`);
  } else {
    console.log(`La letra aleatoria "${letraAleatoria}" es una consonante.`);
    console.log(`Probabilidad de seleccionar una vocal: ${probabilidadVocal}`);
  }
};
//Sylvanas
() => {
  let alfabeto = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let vocales = ["a", "e", "i", "o", "u"];
  let probabilidad = (vocales.length / alfabeto.length) * 100;
  console.log(
    `la probabilidad de que salga una vocal en el alfabeto es ${probabilidad} %`
  );
};
