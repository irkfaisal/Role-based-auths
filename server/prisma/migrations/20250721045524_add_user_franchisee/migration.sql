-- CreateTable
CREATE TABLE "Franchisee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Franchisee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_UserFranchisees" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_UserFranchisees_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_UserFranchisees_B_index" ON "_UserFranchisees"("B");

-- AddForeignKey
ALTER TABLE "_UserFranchisees" ADD CONSTRAINT "_UserFranchisees_A_fkey" FOREIGN KEY ("A") REFERENCES "Franchisee"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UserFranchisees" ADD CONSTRAINT "_UserFranchisees_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
