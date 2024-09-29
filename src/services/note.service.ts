import { CreateNoteDTO } from "src/dto/Note";
import { PrismaService } from "src/prisma/prisma.service";

export class NoteService{
    constructor(private prisma: PrismaService){}
    async createNote(dto: CreateNoteDTO) {
        const note = await this.prisma.note.create({
            data: {createdAt: dto.date}
        })
    }
}