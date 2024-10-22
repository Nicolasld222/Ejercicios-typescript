    //Crea un programa que gestione una biblioteca. El programa debe
    //permitir agregar libros, buscar libros por título y mostrar todos los libros
    //disponibles.




interface libro{
    titulo:string
    autor:string
    disponibilidad: boolean
};

let biblioteca: libro[] = [];

function agregarlibro (titulo:string, autor:string, disponibilidad: boolean):void{
    let nuevo: libro = {
        titulo,
        autor,
        disponibilidad: true
    }
    biblioteca.push(nuevo)
};

