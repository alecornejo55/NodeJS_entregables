class Usuario {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }
    getFullName(){
        return `${this.nombre} ${this.apellido}`;
    }
    addMascota(mascota){
        this.mascotas.push(mascota);
    }
    countMascotas(){
        return this.mascotas.length;
    }
    addBook(nombre, autor){
        this.libros.push({nombre: nombre, autor: autor});
    }
    getBookNames(){
        return this.libros.map(libro => libro.nombre);
    }
}

const usuario = new Usuario("Alex", "Cornejo");
console.log(usuario.getFullName());

usuario.addMascota("Perro");
usuario.addMascota("Gato");
usuario.addMascota("Gato");
console.log(usuario.countMascotas());

usuario.addBook("El señor de los anillos", "J.R.R. Tolkien");
usuario.addBook("Cien años de soledad", "Gabriel García Márquez");
usuario.addBook("Cuentos de amor de locura y de muerte", "Horacio Quiroga");

console.log(usuario.getBookNames()); 