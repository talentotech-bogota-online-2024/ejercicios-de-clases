// Edwin
//* crear un programa para un casino para una ruleta donde hay dos colores rojo y negro
//* hacer es que el color negro y rojo tengan un 40% de probabilidades de que salgan mientras que el color verde solo tenga un 20% de probabilidades
let colors = ["rojo", "negro", "negro", "rojo", "rojo"];
let color = colors[Math.floor(Math.random() * colors.length)];
console.log(color);
