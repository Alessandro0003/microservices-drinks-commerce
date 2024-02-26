/*
  Warnings:

  - Added the required column `drinksCustomerId` to the `PurchaseEnd` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PurchaseEnd" ADD COLUMN     "drinksCustomerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "PurchaseEnd" ADD CONSTRAINT "PurchaseEnd_drinksCustomerId_fkey" FOREIGN KEY ("drinksCustomerId") REFERENCES "DrinksCustomer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
