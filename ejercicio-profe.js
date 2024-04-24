// Profe
/*
 *    Desarrolle un programa en javascript donde el usuario
 *    ingrese edades desde 2 años hasta 60 años y me diga la
 *    probabilidad de ingreso de los mayores de edad.
 */

//Solucion Juan Camilo
() => {
  let edad = parseInt(prompt("ingrese una edad de 2 a 60 años: "));
  let prob = (16 / 58) * 100;
  console.log(
    "La probabilidad de que ingrese un mayor de edad es de " + prob + "%"
  );
}
