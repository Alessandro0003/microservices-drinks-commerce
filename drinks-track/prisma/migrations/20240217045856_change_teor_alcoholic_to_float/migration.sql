/*
  Warnings:

  - You are about to alter the column `teor_alcoholic` on the `Drinks` table. The data in that column could be lost. The data in that column will be cast from `Decimal(3,1)` to `DoublePrecision`.

*/
-- AlterTable
ALTER TABLE "Drinks" ALTER COLUMN "teor_alcoholic" SET DATA TYPE DOUBLE PRECISION;
