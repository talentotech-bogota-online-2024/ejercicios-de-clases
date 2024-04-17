let materiasProgramación = [
  "Estructura de datos",
  "Algoritmos",
  "Bases de datos",
];
materiasProgramación.push("Desarrollo Web");
let cantidadMaterias = materiasProgramación.length;
let materiaFinal = materiasProgramación.pop();
let frase = `En la clase de ${materiasProgramación[0]} aprendimos los fundamentos de la organización de información, mientras que en ${materiasProgramación[1]} exploramos diferentes métodos para resolver problemas.`;
console.log("Materias de programación:", materiasProgramación);
console.log("Materia final:", materiaFinal);
console.log("Cantidad de materias:", cantidadMaterias);
console.log(frase);
