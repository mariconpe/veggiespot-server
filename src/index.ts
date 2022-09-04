import { Sequelize } from 'sequelize-typescript';
import { Product } from './product/product.model';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: 'products',
        define: {
          underscored: true,
        },
        sync: {
          alter: {
            drop: false,
          },
          force: true,
        },
        timezone: '-03:00',
      });
      sequelize.addModels([Product]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
