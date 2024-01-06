import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/data.entity';

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
      entities: [Task],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
