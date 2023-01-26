/*
  Warnings:

  - You are about to drop the column `currency` on the `ServiceRate` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `ServiceRate` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ServiceRate" DROP COLUMN "currency",
DROP COLUMN "type",
ADD COLUMN     "task" TEXT NOT NULL DEFAULT '';
