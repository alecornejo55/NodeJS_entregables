const {Contenedor} = require('./Classes.js');
const {app} = require('./Utils.js');
(async () => {
    const producto1 = new Contenedor('productos.txt');
    // Elimino todos los productos antes de empezar
    await producto1.deleteAll();

    // Guardo productos
    await producto1.save(
        {
            title: "Monitor", 
            price: 50000, 
            thumbnail: 'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/monitor-24-lg-gamer-24gn600b-144hz-0.jpg'
        }
    );
    await producto1.save(
        {
            title: "Teclado redragon", 
            price: 12000, 
            thumbnail: 'https://www.newmaster.com.ar/wp-content/uploads/2020/01/K552W-RGB-SP-1.jpg'
        }
    );
    await producto1.save(
        {
            title: "Silla  Dxracer", 
            price: 70000, 
            thumbnail: 'https://www.dxracer.com.ar/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/g/c/gc-p132-bw-fx1-002_1.jpg'
        }
    );

    // Obtenemos todos los productos
    const productos = await producto1.getAll();
    console.log(productos);
    app.get('/productos', (req, res) => {
        res.send(productos);
    });
    app.get('/productoRandom', (req, res) => {
        const random = Math.floor(Math.random() * productos.length);
        res.send(productos[random]);
    });
})(); 