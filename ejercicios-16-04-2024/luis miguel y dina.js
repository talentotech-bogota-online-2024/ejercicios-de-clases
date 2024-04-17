let materia = ["java script", "react", "html"];
materia.push("css");
let cantidadmaterias = materia.length;
//elimina el ultimo elemento del array por ende ya no existe el elemento css que era el [3]
let ultimaMateria = materia.pop();
let frase = `Estamos aprendiendo ${materia[0]} ya repasamos ${materia[2]} es muy interesante.`;

console.log(
  `las materias son: ${
    materia[0] + " " + materia[1] + " " + materia[2] + " "
  }la ultima materia es ${ultimaMateria} para un total ${cantidadmaterias} y la frase es: ${frase}`
);

//Ya quedo, agregue la frase que nos hacia falta, gracias
