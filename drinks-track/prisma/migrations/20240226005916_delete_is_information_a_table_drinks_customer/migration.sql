/*
  Warnings:

  - You are about to drop the column `name` on the `DrinksCustomer` table. All the data in the column will be lost.
  - You are about to drop the column `teor_alcoholic` on the `DrinksCustomer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DrinksCustomer" DROP COLUMN "name",
DROP COLUMN "teor_alcoholic";
