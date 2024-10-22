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
        console.log(`Tu libro ${titulo} se ha agregado a nuestra libreria`)
    };
    
    function buscarLibroTitulo(titulo:string): libro | undefined{
        const libroencotrado = biblioteca.find(libro => libro.titulo.toLocaleLowerCase() ===titulo.toLocaleLowerCase());
        if(libroencotrado){
            console.log(`Tu libro fue encontrado ${libroencotrado.titulo} y el autor es ${libroencotrado.autor}`)
            return libroencotrado;
        }else{
            console.log(`Tu libro "${titulo}" no fue encontrado`)
            return undefined
        }
    }
    
    function mostrarDisponibilidad():void{
        const librodisponibe = biblioteca.filter(libro => libro.disponibilidad)
        if(librodisponibe.length > 0){
            console.log(`EL libro esta disponible`);
            librodisponibe.forEach(libro => {console.log(` ${libro.titulo} de ${libro.autor}`);
        });
        }else{
            console.log(`No hay disponibles`)
        }
    }
    
    //Ejemplo 
    
    agregarlibro("Cien años de soledad", "Gabriel García Márquez", true);
    
    buscarLibroTitulo ("Cien años de soledad")
    
    mostrarDisponibilidad();