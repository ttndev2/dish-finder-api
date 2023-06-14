import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { Recipe, Prisma } from '@prisma/client';
import { CreateRecipeDto } from './create-recipe.dto';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  // GET /recipes
  @Get()
  async findAll(): Promise<Recipe[]> {
    return this.recipesService.findAll();
  }

  // GET /recipes/number
  @Get('number')
  async count(): Promise<{ message: number }> {
    const count = await this.recipesService.count();
    return { message: count };
  }

  // GET /recipes/{index}
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Recipe> {
    const recipe = await this.recipesService.findOne(Number(id));
    if (!recipe) {
      throw new NotFoundException('Recipe not found');
    }
    return recipe;
  }

  // POST /recipes
  @Post()
  async create(@Body() createRecipeDto: CreateRecipeDto): Promise<Recipe> {
    const recipeData: Prisma.RecipeCreateInput = {
      ...createRecipeDto,
    };
    return this.recipesService.create(recipeData);
  }
}
