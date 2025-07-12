import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  NotFoundException,
} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { Task } from "./entities/task.entity";

@Controller("tasks")
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<Task> {
    const task = await this.tasksService.findOne(+id);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  @Post()
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.create(createTaskDto);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updateTaskDto: UpdateTaskDto
  ): Promise<Task> {
    const task = await this.tasksService.update(+id, updateTaskDto);
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  @Delete(":id")
  async remove(@Param("id") id: string): Promise<void> {
    const result = await this.tasksService.remove(+id);
    if (!result) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }
}
