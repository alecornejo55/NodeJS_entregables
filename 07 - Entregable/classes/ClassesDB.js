const { timeStamp } = require('console');
const fs = require('fs');
class Contenedor {
    constructor(options, table){
        this.options = options;
        this.table = table;
        this.knex = require('knex')(options);
    }
    async save(data){
        try {
            let inserted = await this.knex(this.table).insert(data).returning('id');
            return inserted[0];
        }
        catch (error) {
            console.warn(error.message);
        }
    }
    async getAll(){
        try {
            let data = await this.knex(this.table).select('*');
            if(data.length == 0){
                throw new Error('No hay datos');
            }
            console.log(data);
            return data;
        }
        catch(error) {
            console.log(error.message);
            return [];
        }
    }
}

module.exports = { Contenedor }