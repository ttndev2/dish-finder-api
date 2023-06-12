import { Test, TestingModule } from '@nestjs/testing';
import { RecipesController } from './recipes.controller';
import { RecipesService } from './recipes.service';
import { PrismaService } from '../prisma.service';

describe('RecipesController', () => {
  let controller: RecipesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, RecipesService],
      controllers: [RecipesController],
    }).compile();

    controller = module.get<RecipesController>(RecipesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
