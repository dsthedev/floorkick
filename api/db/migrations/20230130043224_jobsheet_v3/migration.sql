-- CreateTable
CREATE TABLE "JobSheet" (
    "id" SERIAL NOT NULL,
    "jobId" TEXT,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "forWeek" INTEGER NOT NULL DEFAULT 0,
    "retailer" TEXT NOT NULL DEFAULT '',
    "rep" TEXT NOT NULL DEFAULT '',
    "customerName" TEXT NOT NULL DEFAULT '',
    "customerPhone" TEXT,
    "customerAddress" TEXT NOT NULL DEFAULT '',
    "purpose" TEXT NOT NULL DEFAULT '',
    "subfloorType" TEXT NOT NULL DEFAULT '',
    "notes" TEXT DEFAULT '',
    "total" INTEGER DEFAULT 0,
    "markedAsComplete" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobSheet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "JobSheet_jobId_key" ON "JobSheet"("jobId");

-- AddForeignKey
ALTER TABLE "JobSheet" ADD CONSTRAINT "JobSheet_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
