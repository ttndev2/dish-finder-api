import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateRecipeDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  origin: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  difficulty: string;

  @IsNotEmpty()
  @IsString()
  protein: string;

  @IsNotEmpty()
  @IsString()
  produce: string;

  @IsNotEmpty()
  @IsString()
  spice: string;

  @IsNotEmpty()
  @IsString()
  cookingOil: string;

  @IsNotEmpty()
  @IsInt()
  volume: number;

  @IsNotEmpty()
  @IsInt()
  serves: number;

  @IsNotEmpty()
  @IsString()
  authenticity: string;

  @IsNotEmpty()
  @IsString()
  stock: string;
}
