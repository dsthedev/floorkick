/*
  Warnings:

  - You are about to drop the column `userId` on the `Note` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[authorId,id]` on the table `Note` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Note" DROP CONSTRAINT "Note_userId_fkey";

-- DropIndex
DROP INDEX "Note_id_key";

-- DropIndex
DROP INDEX "Note_userId_id_key";

-- AlterTable
ALTER TABLE "Note" DROP COLUMN "userId",
ADD COLUMN     "authorId" INTEGER DEFAULT 1;

-- CreateIndex
CREATE UNIQUE INDEX "Note_authorId_id_key" ON "Note"("authorId", "id");

-- AddForeignKey
ALTER TABLE "Note" ADD CONSTRAINT "Note_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
