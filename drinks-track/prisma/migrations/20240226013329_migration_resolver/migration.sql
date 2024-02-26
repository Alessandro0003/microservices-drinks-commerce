/*
  Warnings:

  - You are about to drop the column `drinksCustomerId` on the `PurchaseEnd` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PurchaseEnd" DROP CONSTRAINT "PurchaseEnd_drinksCustomerId_fkey";

-- AlterTable
ALTER TABLE "PurchaseEnd" DROP COLUMN "drinksCustomerId";
