const config = require('../config/globals');

class PersistenceFactory {
    static getPersistence = async () => {
        let ProductDao;
        let CartDao;
        switch (config.app.persistence) {
            case 'mongo':
                let { ProductDaoMongo } = require('./productos/ProductoDaoMongo');
                let { CarritoDaoMongo } = require('./carritos/CarritoDaoMongo');
                ProductDao = new ProductDaoMongo();
                CartDao = new CarritoDaoMongo();
                return { ProductDao, CartDao };
            case 'firestore':
                let { ProductDaoFirestore } = require('./productos/ProductoDaoFirestore');
                let { CarritoDaoFirestore } = require('./carritos/CarritoDaoFirestore');
                ProductDao = new ProductDaoFirestore();
                CartDao = new CarritoDaoFirestore();
                return { ProductDao, CartDao };
        }
    }
}
module.exports = PersistenceFactory;