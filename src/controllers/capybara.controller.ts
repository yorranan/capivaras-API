import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateCapybaraDTO, UpdateCapybaraDTO } from 'src/dto/Capybara';
import { CapybaraService } from 'src/services/capybara.service';

@Controller('capybara')
export class CapybaraController {
    constructor(private capybara: CapybaraService){}

    @Get()
    getAll(){
        return this.capybara.getAll()
    }
    
    @Get(':id')
    getByID(@Param('id') id: string){
        const queryId = parseInt(id, 10)
        return this.capybara.getById(queryId)
    }
    
    @Post()
    create(@Body() dto: CreateCapybaraDTO){
        return this.capybara.create(dto)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdateCapybaraDTO){
        const queryId = parseInt(id, 10)
        return this.capybara.update(queryId, dto)
    }

    @Delete(':id')
    deleteByID(@Param('id') id: string){
        const queryId = parseInt(id, 10)
        return this.capybara.deleteById(queryId)
    }
}
