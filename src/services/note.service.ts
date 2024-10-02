import { Injectable } from '@nestjs/common';
import { CreateNoteDTO, UpdateNoteDTO } from 'src/dto/Note';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class NoteService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.note.findMany();
  }

  async getById(noteId: number) {
    const capybaraNote = await this.prisma.note.findUnique({
      where: { id: noteId },
    });

    if (!capybaraNote) {
      throw new Error('Capybara Note not found!');
    }

    return capybaraNote;
  }

  async create(dto: CreateNoteDTO) {
    const capybara = await this.prisma.capybara.findUnique({
      where: { id: dto.capybaraId },
    });

    if (!capybara) {
      throw new Error('Capybara not found!');
    }

    const note = await this.prisma.note.create({
      data: {
        capybaraId: dto.capybaraId,
        comportament: dto.comportament,
        observations: dto.observations,
      },
    });
  }

  async update(id: number, dto: UpdateNoteDTO) {
    const capybara = await this.prisma.capybara.findUnique({
      where: { id: dto.capybaraId },
    });

    if (!capybara) {
      throw new Error('Capybara not found!');
    }

    const note = await this.prisma.note.update({
      data: {
        capybaraId: dto.capybaraId,
        comportament: dto.comportament ?? undefined,
        observations: dto.observations ?? undefined,
      },
      where: { id: id },
    });
  }

  async deleteAll() {
    await this.prisma.note.deleteMany();
  }

  async deleteById(id: number) {
    await this.prisma.note.delete({
      where: { id: id },
    });
  }
}
