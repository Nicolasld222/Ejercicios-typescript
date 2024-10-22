//Crea un programa que gestione empleados de una empresa. El
//programa debe permitir agregar empleados, buscar empleados por nombre y
//calcular el salario promedio.

interface empleado{
    nombre:string,
    salario:number
    documento:number
};

let empresa: empleado[] = [];

function agregarEmpleados (nombre:string, salario:number, documento:number):void{
    let nuevoEmpleado: empleado = {
        nombre,
        documento,
        salario
    }
    empresa.push(nuevoEmpleado)
    console.log(`Tu nuevo empleado ${nombre} se ha agregado a nuestra empresa`)
};

function buscarEMpleados(nombre:string): empleado | undefined{
    const empleadoencotrado = empresa.find(empleado => empleado.nombre.toLocaleLowerCase() === nombre.toLocaleLowerCase());
    if(empleadoencotrado){
        console.log(`Tu empleado fue encontrado ${empleadoencotrado.nombre} y su id es ${empleadoencotrado.documento}`)
        return empleadoencotrado;
    }else{
        console.log(`Tu empleado "${nombre}" no fue encontrado`)
        return undefined
    }
}

function calcularSalario(){
    
}