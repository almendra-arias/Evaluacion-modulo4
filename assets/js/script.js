//hacer el inventario
let inventario = []

let productoInventario = {
    nombre: "Parlante SoundLink Bose",
    categoria: "Audio y sonido",
    precio: 34990,
    stock: 8,
}
let productoInventario2 = {
    nombre: "Airpods Pro 3",
    categoria: "Audio y sonido",
    precio: 285990,
    stock: 6,
}

let productoInventario3 = {
    nombre: "Notebook ASUS TUG Gaming",
    categoria: "Computación gamer",
    precio: 759990,
    stock: 3,
}

let productoInventario4 = {
    nombre: "Teclado Gamer Mec",
    categoria: "Computación gamer",
    precio: 10990,
    stock: 15,
}

let productoInventario5 = {
    nombre: "Mouse Gamer Redragon Griffin RGB",
    categoria: "Computación gamer",
    precio: 14990,
    stock: 13,
}

//integrar los objetos al arreglo
inventario.push(productoInventario)
inventario.push(productoInventario2)
inventario.push(productoInventario3)
inventario.push(productoInventario4)
inventario.push(productoInventario5)

//probando el inventario en la consola
// console.log("Este es el inventario: ", inventario)

//recorrer el inventario 

function recorrerInventario (inventario) {
    for (let i = 0; i < inventario.length; i++) {
        let precioFinal = calcularPrecioConIVA(inventario[i].precio);
        console.log(`${i+1}. ${inventario[i].nombre} - $${precioFinal} (IVA) - Stock: ${inventario[i].stock}`)
    }
}


// funcion para calcular el total del inventario 
function calcularTotal(inventario) {
    let sumaTotal = 0;
    for (let i = 0; i < inventario.length; i++) {
        sumaTotal += inventario[i].precio * inventario[i].stock;
    }
    
    return sumaTotal;

}

let totalInventario = calcularTotal(inventario);
console.log("El valor total del inventario:", totalInventario);


//funcion para agregar un producto

function agregarProducto(inventario, nombre, categoria, precio, stock) {
    let nuevoProducto = {
        nombre: nombre,
        categoria: categoria,
        precio: precio,
        stock: stock
    };

    inventario.push(nuevoProducto);
}

//funcion para eliminar un producto
// pop no funciono porque elimina el ultimo

function eliminarProducto(inventario, nombreProducto) {
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre.toLowerCase() === nombreProducto.toLowerCase()) {
            inventario.splice(i, 1);
            return;
        }
    }
}

//funcion para modificar productp

function modificarProducto(inventario, nombreProducto, nuevaCategoria, nuevoPrecio, nuevoStock) {
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre.toLowerCase() === nombreProducto.toLowerCase()) {
            inventario[i].categoria = nuevaCategoria;
            inventario[i].precio = nuevoPrecio;
            inventario[i].stock = nuevoStock;
            return;
        }
    }
}

//funcion para buscar un producto del inventario y usar includes
function buscarProducto(inventario, nombreBuscado) {
    for (let i = 0; i < inventario.length; i++) {
        if (inventario[i].nombre.toLowerCase().includes(nombreBuscado.toLowerCase())) {
            return inventario[i];
        }
    }
    return null;
}

//agregar la funcion del iva 

function calcularPrecioConIVA(precio) {
    let precioConIVA = precio * 1.19;
    return Math.round(precioConIVA);
}

//intentar hacer una forma de navegar en el inventario con while
// \n es como un salto de linea
let opcion = prompt("MENÚ INVENTARIO DE BROADSONICK \n" + "Elige una opción: \n" + "1. Ver inventario \n" + "2. Agregar producto \n" + "3. Eliminar producto \n" + "4. Modificar producto \n" + "5. Buscar producto \n" + "0. Salir")

while (opcion !=="0") {

    if (opcion === "1") {
        alert("Mostrando inventario en consola");
        recorrerInventario(inventario);

    } else if (opcion === "2") {
        
    let nombre = prompt("Ingrese el nombre del producto:");
    let categoria = prompt("Ingrese la categoría:");
    let precio = Number(prompt("Ingrese el precio:"));
    let stock = Number(prompt("Ingrese el stock:"));

    agregarProducto(inventario, nombre, categoria, precio, stock);

    alert("Producto agregado correctamente");
    
    recorrerInventario(inventario);

    } else if (opcion === "3") {

    alert("Eliminar producto");

    recorrerInventario(inventario);

    let nombre = prompt("Ingrese el nombre del producto:");
    
    eliminarProducto(inventario, nombre);

    alert("Producto eliminado correctamente");
    
    recorrerInventario(inventario);


    } else if (opcion === "4") { 

    recorrerInventario(inventario);

    let nombre = prompt("Ingrese el nombre del producto que quiera modificar:");
    let nuevaCategoria = prompt("Ingrese la nueva categoría del producto: ")
    let nuevoPrecio = Number(prompt("Ingrese el nuevo precio del producto: "))
    let nuevoStock = Number(prompt("Ingrese el nuevo Stock del producto: "))

    modificarProducto(inventario, nombre, nuevaCategoria, nuevoPrecio, nuevoStock);

    alert("Producto modificado correctamente");
    
    recorrerInventario(inventario);
    
    } else if (opcion === "5") {

    let nombreBuscar = prompt("Ingrese el nombre del producto a buscar:");
    let productoEncontrado = buscarProducto(inventario, nombreBuscar);

    if (productoEncontrado !== null) {
        alert("Producto encontrado. Revisa la consola");
        console.log(productoEncontrado);
    
        let precioFinal = calcularPrecioConIVA(productoEncontrado.precio);

        console.log("Nombre:", productoEncontrado.nombre);
        console.log("Categoría:", productoEncontrado.categoria);
        console.log("Precio (IVA incluido):", precioFinal);
        console.log("Stock:", productoEncontrado.stock);
    } else {
        alert("Producto no encontrado");
    }

    } else if (opcion === "0") {
        console.log("Saliendo del sistema...");

    } else {
        console.log("Opción no válida");
    }
//puse este para que no se repita infinito la opcion 1
    opcion = prompt(
    "MENÚ INVENTARIO BROADSONICK\n" +
    "1. Ver inventario\n" +
    "2. Agregar producto\n" +
    "3. Eliminar producto\n" +
    "4. Modificar producto\n" +
    "5. Buscar producto\n" +
    "0. Salir"
    );


}



//falta aplicar condiciones de borde por si no ingresan nada o faltan datos, tambien que todo se ingrese en los datos correctos
//agregar toLowerCase pargita evitar problemitas con mayus y min