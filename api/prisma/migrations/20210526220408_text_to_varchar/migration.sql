/*
  Warnings:

  - You are about to alter the column `email` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(125)`.
  - You are about to alter the column `name` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(125)`.
  - You are about to alter the column `password` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "email" SET DATA TYPE VARCHAR(125),
ALTER COLUMN "name" SET DATA TYPE VARCHAR(125),
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255);
