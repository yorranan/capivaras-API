import { CreateCapybaraNoteDTO, UpdateCapybaraNoteDTO } from "src/dto/CapybaraNote";
import { PrismaService } from "src/prisma/prisma.service";

export class CapybaraNoteService {
    constructor(private prisma: PrismaService){}
    async createCapybaraNote(dto: CreateCapybaraNoteDTO){
        const note = await this.prisma.note.findUnique({
            where: {id: dto.noteId}
        })

        if (!note){
            throw new Error('Note not found!')
        }

        const capybara = await this.prisma.capybara.findUnique({
            where: {id: dto.capybaraId}
        })

        if (!capybara){
            throw new Error('Capybara not found!')
        }

        const capybaraNote = await this.prisma.capybaraNote.create({
            data: {
                capybaraId: dto.capybaraId,
                noteId: dto.noteId,
                comportament: dto.comportament ?? undefined,
                observations: dto.observations ?? undefined
            }
        })
    }

    async updateCapybaraNote(dto: UpdateCapybaraNoteDTO){
        const note = await this.prisma.note.findUnique({
            where: {id: dto.noteId}
        })

        if (!note){
            throw new Error('Note not found!')
        }

        const capybara = await this.prisma.capybara.findUnique({
            where: {id: dto.capybaraId}
        })

        if (!capybara){
            throw new Error('Capybara not found!')
        }

        const capybaraNote = await this.prisma.capybaraNote.update({
            data: {
                capybaraId: dto.capybaraId,
                noteId: dto.noteId,
                comportament: dto.comportament ?? undefined,
                observations: dto.observations ?? undefined
            },
            where: {
                noteId_capybaraId: {
                    noteId: dto.noteId,
                    capybaraId: dto.capybaraId
                }
            }
        })
    }
}