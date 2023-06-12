-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "protein" TEXT NOT NULL,
    "produce" TEXT NOT NULL,
    "spice" TEXT NOT NULL,
    "cookingOil" TEXT NOT NULL,
    "volume" INTEGER NOT NULL,
    "serves" INTEGER NOT NULL,
    "authenticity" TEXT NOT NULL,
    "stock" TEXT NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);
