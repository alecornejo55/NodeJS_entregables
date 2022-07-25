const options = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'ecommerce'
    },
    pool: {
        min: 0,
        max: 7
    }
};

const optionGeneric = {
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: ''
    },
    pool: {
        min: 0,
        max: 7
    }
};
module.exports = { options, optionGeneric };
