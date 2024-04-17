let materiaTecnologicas = ["sql", "java", "mean"];

//elimina el ultimo elemento del array por ende ya no existe el elemento ``"mean"``
materiaTecnologicas.pop();

//Añade y lee un ultimo elemento del array ``"python"``
materiaTecnologicas.push("python");
console.log(materiaTecnologicas);

/*El error --> Console.log(materiaTecnologicas);*/

let materiaFinal = materiaTecnologicas[materiaTecnologicas.length - 1];
console.log("La ultima materia es 	" + materiaFinal);

let totalMaterias = materiaTecnologicas.length;
console.log("El total de materia es	" + totalMaterias);
