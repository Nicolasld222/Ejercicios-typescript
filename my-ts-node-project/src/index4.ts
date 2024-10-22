//Crea un programa que gestione estudiantes de una escuela. El
//programa debe permitir agregar estudiantes, buscar estudiantes por nombre y
//calcular el promedio de notas de todos los estudiantes.


interface estudiante{
    nombre:string
    identificacion:number
    notas:number
};

let escuela: estudiante[] = [];

function agregarEstudiante (nombre:string, identificacion:number,notas:number):void{
    let nuevoEstudiante: estudiante = {
        nombre,
        identificacion,
        notas
    }
    escuela.push(nuevoEstudiante)
    console.log(`Tu nuevo estudiante fue agregado su nombre es ${nombre} y su identificacion es ${identificacion}`)
};

function buscarEstudiante(nombre:string): estudiante | undefined{
    const estudianteencotrado = escuela.find(estudiante => estudiante.nombre.toLocaleLowerCase() === nombre.toLocaleLowerCase());
    if(estudianteencotrado){
        console.log(`El estudiante fue encontrado ${estudianteencotrado.nombre} y su identificacion es ${estudianteencotrado.identificacion}`)
        return estudianteencotrado;
    }else{
        console.log(`El estudiante "${nombre}" no fue encontrado`)
        return undefined
    }
}

function promedioNotas(): number {
    if (escuela.length === 0) {
        console.log("No hay estudiantes en la escuela.");
        return 0;
    }

    const sumaNotas = escuela.reduce((total, estudiante) => total + estudiante.notas, 0);
    const promedio = sumaNotas / escuela.length;
    console.log(`El promedio de notas de todos los estudiantes es: ${promedio.toFixed(2)}`);
    return promedio;
}

// Ejemplo 
agregarEstudiante("Juan", 101097, 85);
agregarEstudiante("Ana", 102273, 90);
agregarEstudiante("Luis", 103123, 75);

buscarEstudiante("Ana");

promedioNotas();