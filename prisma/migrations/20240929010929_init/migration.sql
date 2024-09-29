/*
  Warnings:

  - You are about to drop the column `comportament` on the `Note` table. All the data in the column will be lost.
  - You are about to drop the column `observations` on the `Note` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `CapybaraNote` ADD COLUMN `comportament` VARCHAR(255) NULL,
    ADD COLUMN `observations` VARCHAR(255) NULL;

-- AlterTable
ALTER TABLE `Note` DROP COLUMN `comportament`,
    DROP COLUMN `observations`;
