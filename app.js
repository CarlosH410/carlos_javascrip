
for(let i = 1; i <= 1; i++) {

    const nombreAlumno = prompt("Ingrese nombre del alumno " + i);

    let promedio = 0;

    for(let j = 1; j <= 3; j++) {
        const nota = parseInt(prompt("Ingrese la nota " + j));

        promedio = promedio + nota;
    }

    promedio = parseInt(promedio / 3);

   

    alert("El nombre del alumno " + i + " es: " + nombreAlumno + " y su promedio: " + promedio);
}

let numero = parseInt(prompt("Ingrese su promedio"));

while(numero < 7) {
    numero = parseInt(prompt("Ingrese su promedio"));
}

for(let i = 1; i <= numero; i++) {
    console.log(i);
}


console.log("aprobaste");



