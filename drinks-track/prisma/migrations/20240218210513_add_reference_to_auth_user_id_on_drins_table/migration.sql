/*
  Warnings:

  - A unique constraint covering the columns `[authUserId]` on the table `Drinks` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Drinks" ADD COLUMN     "authUserId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Drinks_authUserId_key" ON "Drinks"("authUserId");
