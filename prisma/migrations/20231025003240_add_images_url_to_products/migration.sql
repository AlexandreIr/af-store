/*
  Warnings:

  - You are about to drop the column `imagesURL` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "imagesURL",
ADD COLUMN     "imageUrls" TEXT[];
