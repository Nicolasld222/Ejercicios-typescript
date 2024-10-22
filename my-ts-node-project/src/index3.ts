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

function valorInventario(): number{
    if(tienda.length === 0){
        console.log(`No hay productos en nuestra tienda`);
        return 0;
    }
    const inventarioTotal = tienda.reduce((total, producto) => total + producto.valor, 0);
    console.log(`El valor total del inventario es: ${inventarioTotal}`);
    return inventarioTotal;
}

// Ejemplo 
agregarProducto("Chocolatina", 1000);
agregarProducto("Papas", 3000);
agregarProducto("Coca-cola", 3200);

buscarProducto("Coca-cola");

valorInventario();