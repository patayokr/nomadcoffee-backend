-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);
