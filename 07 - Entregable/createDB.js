// Importamos datos de conexiones
const { options: optMDB, optionGeneric } = require('./options/mariaDB.js');
const { options: optLite } = require('./options/sqlite3.js');

(async () => {
    try {
        knexNew = require('knex')(optionGeneric);
        // Creando bd y tabla de productos
        await knexNew.raw('CREATE DATABASE IF NOT EXISTS ??', optMDB.connection.database)
        await knexNew.destroy();
        const knexMDB = require('knex')(optMDB);

        const exists_productos = await knexMDB.schema.hasTable('productos');
        if (!exists_productos) {
            await knexMDB.schema.createTable('productos', table => {
                table.increments('id').primary();
                table.string('title').notNull();
                table.integer('price').notNull();
                table.string('thumbnail').notNull();
            });
        }

        // Creando bd y tabla de mensajes
        const knexLite = require('knex')(optLite);
        const exists_mensajes = await knexLite.schema.hasTable('mensajes');
        if (!exists_mensajes) {
            await knexLite.schema.createTable('mensajes', table => {
                table.increments('id').primary().notNull(),
                table.string('email').notNull(),
                table.string('message').notNull(),
                table.timestamp('dateTime').notNullable().defaultTo(knexLite.fn.now());;
            });
        }
        
        await knexMDB.destroy();
        await knexLite.destroy();
    }
    catch (error) {
        console.log(error);
    }
})();