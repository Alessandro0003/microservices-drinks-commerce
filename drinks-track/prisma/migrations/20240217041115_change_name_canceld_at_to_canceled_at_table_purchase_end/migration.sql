/*
  Warnings:

  - You are about to drop the column `canceldAt` on the `PurchaseEnd` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "PurchaseEnd" DROP COLUMN "canceldAt",
ADD COLUMN     "canceledAt" TIMESTAMP(3);
