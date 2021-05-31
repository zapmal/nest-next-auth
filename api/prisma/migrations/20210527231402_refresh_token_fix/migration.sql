/*
  Warnings:

  - You are about to drop the column `access_token` on the `Users` table. All the data in the column will be lost.
  - Added the required column `refresh_token` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "access_token",
ADD COLUMN     "refresh_token" TEXT NOT NULL;
