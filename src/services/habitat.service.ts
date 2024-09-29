import { CreateHabitatDTO, UpdateHabitatDTO } from "src/dto/Habitat";
import { PrismaService } from "src/prisma/prisma.service";

export class HabitatService{
    constructor(private prisma: PrismaService){}
    async createHabitat(dto: CreateHabitatDTO){
        const habitat = this.prisma.habitat.create({
            data: {
                name: dto.name,
                is_enable: dto.is_enable
            }
        })
    }

    async updateHabitat(dto: UpdateHabitatDTO){
        const existingHabitat = await this.prisma.habitat.findUnique({
            where: { id: dto.id }
        });

        if (!existingHabitat) {
            throw new Error('Habitat not found');
        }

        const habitat = await this.prisma.habitat.update({
            data: {
            name: dto.name !== undefined ? dto.name : existingHabitat.name,
            is_enable: dto.is_enable !== undefined ? dto.is_enable : existingHabitat.is_enable
            },
            where: { id: dto.id }
        });
    }
}