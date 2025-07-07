import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from '../../src/modules/tasks/tasks.controller';
import { TasksService } from '../../src/modules/tasks/tasks.service';
import { Task } from '../../src/modules/tasks/entities/task.entity';

describe('TasksController', () => {
  let controller: TasksController;
  let service: TasksService;

  const mockTasksService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [{ provide: TasksService, useValue: mockTasksService }],
    }).compile();

    controller = module.get<TasksController>(TasksController);
    service = module.get<TasksService>(TasksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of tasks', async () => {
      const result: Task[] = [
        {
          id: 1,
          title: 'Test Task',
          description: 'Test Desc',
          completed: false,
        },
      ];
      jest.spyOn(service, 'findAll').mockResolvedValue(result);

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a task by ID', async () => {
      const result: Task = {
        id: 1,
        title: 'Test Task',
        description: 'Test Desc',
        completed: false,
      };
      jest.spyOn(service, 'findOne').mockResolvedValue(result);

      expect(await controller.findOne('1')).toBe(result);
    });

    it('should throw NotFoundException if task not found', async () => {
      jest.spyOn(service, 'findOne').mockResolvedValue(null);

      await expect(controller.findOne('1')).rejects.toThrow(
        'Task with ID 1 not found',
      );
    });
  });

  describe('create', () => {
    it('should create a new task', async () => {
      const createTaskDto = { title: 'New Task', description: 'New Desc' };
      const result: Task = {
        id: 1,
        title: 'New Task',
        description: 'New Desc',
        completed: false,
      };
      jest.spyOn(service, 'create').mockResolvedValue(result);

      expect(await controller.create(createTaskDto)).toBe(result);
    });
  });
});
