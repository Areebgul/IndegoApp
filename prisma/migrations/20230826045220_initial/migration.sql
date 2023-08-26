-- CreateTable
CREATE TABLE "IndegoStation" (
    "id" SERIAL NOT NULL,
    "stationId" TEXT NOT NULL,
    "bikesAvailable" INTEGER NOT NULL,
    "docksAvailable" INTEGER NOT NULL,
    "totalDocks" INTEGER NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "IndegoStation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IndegoStation_stationId_key" ON "IndegoStation"("stationId");
