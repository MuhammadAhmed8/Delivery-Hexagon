import path from 'path';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5433,
        username: 'maak',
        password: '12345678',
        database: 'delivery',
        entities: [
            __dirname + 'dist/modules/**/*.entity{.ts,.js}',
        ],
        migrations: [path.resolve(__dirname,'dist/infrastucture/database/migrations/**/*{.ts,.js}')],
        migrationsTableName: "custom_migration_table",
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];