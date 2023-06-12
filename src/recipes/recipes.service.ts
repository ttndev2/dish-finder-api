import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Recipe, Prisma } from '@prisma/client';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Recipe[]> {
    return this.prisma.recipe.findMany();
  }

  async count(): Promise<number> {
    return this.prisma.recipe.count();
  }

  async findOne(id: number): Promise<Recipe> {
    const recipe = await this.prisma.recipe.findUnique({
      where: {
        id,
      },
    });
    if (!recipe) {
      throw new NotFoundException('Recipe not found');
    }
    return recipe;
  }

  async create(data: Prisma.RecipeCreateInput): Promise<Recipe> {
    try {
      return await this.prisma.recipe.create({ data });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          `A recipe with the name '${data.name}' already exists.`,
        );
      } else {
        throw error;
      }
    }
  }
}
