import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CreateNoteDTO } from "src/dto/Note";
import { NoteService } from "src/services/note.service";

@Controller('note')
export class NoteController{
    constructor(private note: NoteService){}
    
    @Get()
    getAll(){
        return this.note.getAll()
    }
    
    @Get(':id')
    getById(@Param('id') id: string){
        const queryId = parseInt(id, 10)
        return this.note.getById(queryId)
    }
    
    @Post()
    create(@Body() dto: CreateNoteDTO){
        return this.note.create(dto)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto){
        const queryId = parseInt(id, 10)
        return this.note.update(queryId, dto)
    }

    @Delete(':id')
    deleteByID(@Param('id') id: string){
        const queryId = parseInt(id, 10)
        return this.note.deleteById(queryId)
    }
}