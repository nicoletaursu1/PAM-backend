import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './Event/event.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      expandVariables: true,
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        name: 'default',
        dropSchema: false,
        autoSchemaSync: true,
        type: 'sqlite',
        database: './db/db.sqlite',
        sinchronize: true,
        autoLoadEntities: true,
        migrationsRun: false,
        logging: true,
        keepConnectionAlive: true
      }),
    }),
    EventModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
