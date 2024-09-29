import { doesNotReject } from "assert";
import { error } from "console";
import { CreateCapybaraDTO, UpdateCapybaraDTO } from "src/dto/Capybara";
import { PrismaService } from "src/prisma/prisma.service";

export class CapybaraService{
    constructor(private prisma: PrismaService){}
    async createCapybara(dto: CreateCapybaraDTO){
        const capybara = this.prisma.capybara.create({
            data:{
                name: dto.name,
                age: dto.age,
                weight: dto.weight,
                health: dto.health,
                habitatId: dto.habitatId
            }
        })
    }

    async updateCapybara(dto: UpdateCapybaraDTO){
        const existingCapybara = await this.prisma.capybara.findUnique({
            where: {id: dto.id}
        })

        if(!existingCapybara){
            throw new Error('Capybara not found!')
        }

        const habitat = await this.prisma.habitat.findUnique({
            where: { id: dto.habitatId }
        })

        if(!habitat){
            throw new Error('Habitat Not Found!')
        }
        
        const capybara = await this.prisma.capybara.update({
            data:{
                name: dto.name !== undefined ? dto.name : existingCapybara.name,
                age: dto.age !== undefined ? dto.age : existingCapybara.age,
                weight: dto.weight !== undefined ? dto.weight : existingCapybara.weight,
                health: dto.health !== undefined ? dto.health : existingCapybara.health,
                habitatId: dto.habitatId !== undefined ? dto.habitatId : existingCapybara.habitatId
            },
            where: {id: dto.id}
        })
    }
}