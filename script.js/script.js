//Simulacro de carrito de compras.:
//existen dos array de productos y otro vacio para el carrito.
//comienzo describiendo las clases.
//Con cancelar o esc se "sale".

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
  }
  class ProductoEnCarrito{
    constructor(nombre, precio, cantidad){
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }
    añadirProducto(sumarCantidad){
    this.cantidad = sumarCantidad
    }
  }
  const producto1 = new Producto("Floral", 1000)
  const producto2 = new Producto("Constelación", 800)
  const producto3 = new Producto("Ciudad", 1200)
  const producto4 = new Producto("Bosque", 1400)
  const producto5 = new Producto("Comidas", 600)
  
  const productos = [producto1, producto2, producto3, producto4, producto5]
  const carrito = []
  let respuesta
  
  do {
   respuesta = prompt(" ¿Quiere comprar un azafran?(Responda si o no)").toLowerCase()
    if(respuesta == "si"){
        alert("Lista de productos con stock")//No quiero mostrar los producto en stock por consola, por eso el alert con los nombre y precios diseños de tapas debajo.
        productos.forEach(producto => 
            producto.nombre + " " + producto.precio + "$"
        );
        alert("Floral $1000, Constelacion $800, Ciudad $1200, Bosque $1400, Comidas $600")
    }else if(respuesta =="no"){
        alert("Gracias por visitarnos")
    }else{
        alert("Coloque una respuesta valida(si o no)")
    }
   }
  while (respuesta != "si")
  
  let respuestaProducto
  let respuestaAñadirMas
  let cantidadAComprar
  
  do{
  respuestaProducto = prompt("Escriba nombre de producto").toLowerCase()
  
  switch(respuestaProducto) { //Casos que me interesan exponer.
  case "floral": const productoEnCarrito1 = new ProductoEnCarrito("Floral", 1000, 0)
  carrito.push(productoEnCarrito1)
  cantidadAComprar = prompt("Unidades")
  productoEnCarrito1.añadirProducto(cantidadAComprar)
  break;
  case "constelacion": const productoEnCarrito2 = new ProductoEnCarrito("Constelacion", 800, 0)
  carrito.push(productoEnCarrito2)
  cantidadAComprar = prompt("Unidades")
  productoEnCarrito2.añadirProducto(cantidadAComprar)
  break;
  case "bosque": const productoEnCarrito3 = new ProductoEnCarrito("Ciudad", 1200, 0)
  carrito.push(productoEnCarrito3)
  cantidadAComprar = prompt("Unidades")
  productoEnCarrito3.añadirProducto(cantidadAComprar)
  break;
  case "ciudad": const productoEnCarrito4 = new ProductoEnCarrito("Bosque", 1400, 0)
  carrito.push(productoEnCarrito4)
  cantidadAComprar = prompt("Unidades")
  productoEnCarrito4.añadirProducto(cantidadAComprar)
  break;
  case "comidas": const productoEnCarrito5 = new ProductoEnCarrito("Comidas", 600, 0)
  carrito.push(productoEnCarrito5)
  cantidadAComprar = prompt("Unidades")
  productoEnCarrito5.añadirProducto(cantidadAComprar)
  break;
  default:
  break;
  }
  
  respuestaAñadirMas = prompt("Desea añadir otro producto (Si o No)?")
  }while(respuestaAñadirMas !="no")
  alert("Su lista se vera por consola. Muchas Gracias!")
  console.log(carrito)
  
  