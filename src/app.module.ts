import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'nestjscourse',
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true, // Always keeps database Scheme in sync( in case we don't want to manually run migrations)
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
