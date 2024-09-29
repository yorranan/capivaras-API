/*
  Warnings:

  - You are about to drop the column `status` on the `Capybara` table. All the data in the column will be lost.
  - Added the required column `health` to the `Capybara` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Capybara` DROP COLUMN `status`,
    ADD COLUMN `health` ENUM('HEALTHY', 'NEED_CARE', 'DIED') NOT NULL;
