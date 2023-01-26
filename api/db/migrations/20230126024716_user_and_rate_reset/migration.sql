/*
  Warnings:

  - You are about to drop the column `name` on the `ServiceRate` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `ServiceRate` table. All the data in the column will be lost.
  - You are about to drop the column `uuid` on the `ServiceRate` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Note` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Realm` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[authorId,id]` on the table `ServiceRate` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[handle]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `handle` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Realm" DROP CONSTRAINT "Realm_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "ServiceRate" DROP CONSTRAINT "ServiceRate_ownerId_fkey";

-- DropIndex
DROP INDEX "ServiceRate_ownerId_id_key";

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "ServiceRate" DROP COLUMN "name",
DROP COLUMN "ownerId",
DROP COLUMN "uuid",
ADD COLUMN     "authorId" INTEGER DEFAULT 1;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "handle" TEXT NOT NULL,
ALTER COLUMN "email" DROP NOT NULL;

-- DropTable
DROP TABLE "Note";

-- DropTable
DROP TABLE "Realm";

-- CreateIndex
CREATE UNIQUE INDEX "ServiceRate_authorId_id_key" ON "ServiceRate"("authorId", "id");

-- CreateIndex
CREATE UNIQUE INDEX "User_handle_key" ON "User"("handle");

-- AddForeignKey
ALTER TABLE "ServiceRate" ADD CONSTRAINT "ServiceRate_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
