import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TasksModule } from "./tasks/tasks.module";
import { Task } from "./tasks/entities/task.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DATABASE_HOST || "localhost",
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      username: process.env.DATABASE_USERNAME || "postgres",
      password: process.env.DATABASE_PASSWORD || "postgres",
      database: process.env.DATABASE_NAME || "taskdb",
      entities: [Task],
      synchronize: true, // Note: Set to false in production
    }),
    TasksModule,
  ],
})
export class AppModule {}
