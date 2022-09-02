import { Sequelize } from 'sequelize-typescript';
import { Product } from '../product/product.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'admin',
        password: 'veggiespot_admin',
        database: 'products',
        define: {
          underscored: true,
        },
      });
      sequelize.addModels([Product]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
