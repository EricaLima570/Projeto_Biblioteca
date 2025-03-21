/*
  Warnings:

  - You are about to drop the column `nome` on the `users` table. All the data in the column will be lost.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "books" ALTER COLUMN "price" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "nome",
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "username" TEXT NOT NULL;
