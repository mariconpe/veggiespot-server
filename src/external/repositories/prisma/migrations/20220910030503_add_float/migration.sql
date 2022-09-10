/*
  Warnings:

  - The `stock` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `basePrice` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `discountPercentage` column on the `Product` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "stock",
ADD COLUMN     "stock" INTEGER DEFAULT 0,
DROP COLUMN "basePrice",
ADD COLUMN     "basePrice" DOUBLE PRECISION,
DROP COLUMN "discountPercentage",
ADD COLUMN     "discountPercentage" INTEGER;
