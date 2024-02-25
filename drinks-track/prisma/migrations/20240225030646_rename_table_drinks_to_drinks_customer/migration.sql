/*
  Warnings:

  - You are about to drop the column `drinksId` on the `PurchaseEnd` table. All the data in the column will be lost.
  - You are about to drop the `Drinks` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `drinksCustomerId` to the `PurchaseEnd` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PurchaseEnd" DROP CONSTRAINT "PurchaseEnd_drinksId_fkey";

-- AlterTable
ALTER TABLE "PurchaseEnd" DROP COLUMN "drinksId",
ADD COLUMN     "drinksCustomerId" TEXT NOT NULL;

-- DropTable
DROP TABLE "Drinks";

-- CreateTable
CREATE TABLE "DrinksCustomer" (
    "id" TEXT NOT NULL,
    "authUserId" TEXT,
    "name" TEXT NOT NULL,
    "teor_alcoholic" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DrinksCustomer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DrinksCustomer_authUserId_key" ON "DrinksCustomer"("authUserId");

-- AddForeignKey
ALTER TABLE "PurchaseEnd" ADD CONSTRAINT "PurchaseEnd_drinksCustomerId_fkey" FOREIGN KEY ("drinksCustomerId") REFERENCES "DrinksCustomer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
