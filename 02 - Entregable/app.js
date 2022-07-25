const {Contenedor} = require('./Classes.js');
(async () => {
    const producto1 = new Contenedor('productos.txt');

    console.log(await producto1.save(
        {
            title: "Monitor", 
            price: 50000, 
            thumbnail: 'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-24-lg-gamer-24gn600b-144hz-0.jpg'
        }
    ));

    console.log(await producto1.save(
        {
            title: "Teclado redragon", 
            price: 12000, 
            thumbnail: 'https://www.newmaster.com.ar/wp-content/uploads/2020/01/K552W-RGB-SP-1.jpg'
        }
    ));
    // Obtenemos por id y lo mostramos
    console.log(await producto1.getById(1));

    // Obtenemos todos los productos
    const productos = await producto1.getAll();
    console.log(productos);

    // Eliminamos un producto por id
    await producto1.deleteById(1);

    // Eliminamos todos los productos
    // await producto1.deleteAll();
})();