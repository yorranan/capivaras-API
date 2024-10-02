import { Injectable } from '@nestjs/common';
import { CreateHabitatDTO, UpdateHabitatDTO } from 'src/dto/Habitat';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HabitatService {
  async getAll() {
    return await this.prisma.habitat.findMany();
  }

  async getById(queryId: number) {
    const result = await this.prisma.habitat.findUnique({
      where: { id: queryId },
    });
    if (!result) {
      throw new Error('Habitat not found!');
    }
    return result;
  }

  async getCapivarasInHabitat(habitatId: number) {
    // Buscar todas as capivaras que estão no habitat com o habitatId fornecido
    const capivaras = await this.prisma.capybara.findMany({
      where: { habitatId: habitatId },
    });
  
    // Retornar a lista de capivaras encontradas
    return capivaras;
  }

  constructor(private prisma: PrismaService) {}
  async create(dto: CreateHabitatDTO) {
    const habitat = await this.prisma.habitat.create({
      data: {
        name: dto.name,
        is_enable: dto.is_enable,
      },
    });
  }

  async update(id: number, dto: UpdateHabitatDTO) {
    const existingHabitat = await this.prisma.habitat.findUnique({
      where: { id: id },
    });

    if (!existingHabitat) {
      throw new Error('Habitat not found');
    }

    const habitat = await this.prisma.habitat.update({
      data: {
        name: dto.name !== undefined ? dto.name : existingHabitat.name,
        is_enable:
          dto.is_enable !== undefined
            ? dto.is_enable
            : existingHabitat.is_enable,
      },
      where: { id: id },
    });
  }

  async deleteAll() {
    await this.prisma.habitat.deleteMany();
  }

  async deleteById(id: number) {
    await this.prisma.capybara.deleteMany({
      where: {habitatId: id}
    })

    await this.prisma.habitat.delete({
      where: { id: id },
    });
  }
}
