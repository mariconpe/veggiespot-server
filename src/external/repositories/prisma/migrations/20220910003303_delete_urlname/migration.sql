/*
  Warnings:

  - You are about to drop the column `urlName` on the `Product` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Product_urlName_key";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "urlName";
