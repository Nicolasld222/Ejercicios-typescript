interface producto{
    nombre:string
    valor:number
};

let tienda: producto[] = [];

function agregarProducto (nombre:string, valor:number):void{
    let nuevoProducto: producto = {
        nombre,
        valor
    }
    tienda.push(nuevoProducto)
    console.log(`Tu producto ${nombre} se ha agregado a nuestra tienda y el valor es ${valor}`)
};

function buscarProducto(nombre:string): producto | undefined{
    const productoencotrado = tienda.find(producto => producto.nombre.toLocaleLowerCase() === nombre.toLocaleLowerCase());
    if(productoencotrado){
        console.log(`Tu producto fue encontrado ${productoencotrado.nombre} y el valor es ${productoencotrado.valor}`)
        return productoencotrado;
    }else{
        console.log(`Tu producto "${nombre}" no fue encontrado`)
        return undefined
    }
}

function valorInventario():void{}