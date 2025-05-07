import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { TaxReturnModule } from './tax-return/tax-return.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    TaxReturnModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
      context: ({ req }) => ({ req }),
      debug: process.env.NODE_ENV === 'development',
      playground: true, // In a real project, we would disable this in production
      cors: {
        origin: '*', // In a real project, we would restrict this to specific origins
        credentials: true,
      },
    }),
  ],
})
export class AppModule {}
