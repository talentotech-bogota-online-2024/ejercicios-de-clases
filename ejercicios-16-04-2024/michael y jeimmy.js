let materias = ["Javascript", "Inglés", "HTML", "CSS"];
materias.push("React");
let ultimaMateria = materias.pop();
let cantidadMaterias = materias.length;
let frase =
  "Me gusta programar en " +
  materias[0] +
  " y diseñar páginas web con " +
  materias[2] +
  ".";
console.log("La última materia del arreglo es: " + ultimaMateria);
console.log("Hay un total de " + cantidadMaterias + " materias en el arreglo.");
console.log(frase);
