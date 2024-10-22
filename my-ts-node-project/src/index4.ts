//Crea un programa que gestione estudiantes de una escuela. El
//programa debe permitir agregar estudiantes, buscar estudiantes por nombre y
//calcular el promedio de notas de todos los estudiantes.


interface estudiante{
    nombre:string
    identificacion:number
};

let escuela: estudiante[] = [];

function agregarEstudiante (nombre:string, identificacion:number):void{
    let nuevoEstudiante: estudiante = {
        nombre,
        identificacion
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

function PromedioNotas():void{}