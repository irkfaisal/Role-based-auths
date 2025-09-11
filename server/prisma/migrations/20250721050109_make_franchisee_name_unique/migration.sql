/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Franchisee` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Franchisee_name_key" ON "Franchisee"("name");
