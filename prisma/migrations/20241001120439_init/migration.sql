-- CreateTable
CREATE TABLE `Pictures` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `link` VARCHAR(255) NOT NULL,
    `capybaraId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pictures` ADD CONSTRAINT `Pictures_capybaraId_fkey` FOREIGN KEY (`capybaraId`) REFERENCES `Capybara`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
