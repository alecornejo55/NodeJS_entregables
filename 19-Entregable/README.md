# Desafíos de NODEJS

## Desafío: Reformar para usar otro framework

Utilicé Sails para hacer una API de productos

### Instalación:
npm i 

### Inicio de server:
nodemon app

### Colección de postman:
https://www.getpostman.com/collections/2143bd997a19b4ec60a9

### Id de ejemplo:
62f6af3c599f0d592c42a73c

Este id es generado automáticamente cuando se inserta un nuevo producto

### Rutas:
#### Obtener productos:
```bash
// GET
http://localhost:1337/productos/
```

#### Obtener por ID:
```bash
// GET
http://localhost:1337/productos/62f6af3c599f0d592c42a73c
```

#### Agregar nuevo producto:
```bash
// POST, por body -> form-data
name:Monitor LG
description:Monitor LED 40 pulgadas
code:LGFHD40
image:https://www.lg.com/uk/images/tvs/md05601001/gallery/medium01.jpg
price:70000
stock:10
```
``` Bash
Por url:
http://localhost:1337/productos/
```

#### Editar un producto producto:
```bash
// PUT, por body -> form-data
name:Monitor LG Full HD
description:Monitor LED 27 pulgadas
code:LGFHD27
image:https://www.lg.com/uk/images/tvs/md05601001/gallery/medium01.jpg
price:60000
stock:20
```
``` Bash
Por url:
http://localhost:1337/productos/62f6af3c599f0d592c42a73c
```

#### Eliminar un producto:
```bash
// DELETE
http://localhost:1337/productos/62f6af3c599f0d592c42a73c
```


