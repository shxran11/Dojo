-- CreateEnum
CREATE TYPE "Category" AS ENUM ('ALL', 'WORK', 'PERSONAL', 'WISHLIST', 'BIRTHDAY');

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "category" "Category" NOT NULL DEFAULT 'ALL';
