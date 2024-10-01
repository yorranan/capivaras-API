import { Injectable } from '@nestjs/common';
import { CreateCapybaraDTO, UpdateCapybaraDTO } from 'src/dto/Capybara';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CapybaraService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.capybara.findMany();
  }

  async getById(id: number) {
    const result = await this.prisma.capybara.findUnique({
      where: { id: id },
    });
    if (!result) {
      throw new Error('Capybara not found!');
    }
    return result;
  }

  async create(dto: CreateCapybaraDTO) {
    const capybara = await this.prisma.capybara.create({
      data: {
        name: dto.name,
        age: dto.age,
        weight: dto.weight,
        health: dto.health,
        habitatId: dto.habitatId,
      },
    });
    console.log(capybara);
  }

  async update(id: number, dto: UpdateCapybaraDTO) {
    const existingCapybara = await this.prisma.capybara.findUnique({
      where: { id: id },
    });

    if (!existingCapybara) {
      throw new Error('Capybara not found!');
    }

    const habitat = await this.prisma.habitat.findUnique({
      where: { id: dto.habitatId },
    });

    if (!habitat) {
      throw new Error('Habitat Not Found!');
    }

    const capybara = await this.prisma.capybara.update({
      data: {
        name: dto.name !== undefined ? dto.name : existingCapybara.name,
        age: dto.age !== undefined ? dto.age : existingCapybara.age,
        weight: dto.weight !== undefined ? dto.weight : existingCapybara.weight,
        health: dto.health !== undefined ? dto.health : existingCapybara.health,
        habitatId:
          dto.habitatId !== undefined
            ? dto.habitatId
            : existingCapybara.habitatId,
      },
      where: { id: id },
    });

    console.log(capybara);
  }

  async deleteAll() {
    await this.prisma.capybara.deleteMany();
  }

  async deleteById(id: number) {
    await this.prisma.capybara.delete({
      where: { id: id },
    });
  }
}
