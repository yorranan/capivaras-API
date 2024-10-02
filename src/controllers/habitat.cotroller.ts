import { Controller, Get, Post, Param, Patch, Body, HttpStatus, HttpCode, Delete } from "@nestjs/common";
import { CreateHabitatDTO, UpdateHabitatDTO } from "src/dto/Habitat";
import { HabitatService } from "src/services/habitat.service";

@Controller('habitat')
export class HabitatController{
    constructor(private habitat: HabitatService){}

    @HttpCode(HttpStatus.FOUND)
    @Get()
    getAll(){
        return this.habitat.getAll()
    }

    @HttpCode(HttpStatus.FOUND)
    @Get(`:id`)
    getById(@Param('id') id: string){
        const queryId = parseInt(id, 10)
        return this.habitat.getById(queryId)
    }

    @HttpCode(HttpStatus.FOUND)
    @Get(':id/capybaras')
    getCapybaras(@Param('id') id: string){
        const queryId = parseInt(id, 10)
        return this.habitat.getCapivarasInHabitat(queryId)
    }

    @HttpCode(HttpStatus.CREATED)
    @Post()
    create(@Body() dto: CreateHabitatDTO){
        return this.habitat.create(dto)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdateHabitatDTO){
        const queryId = parseInt(id, 10)
        return this.habitat.update(queryId, dto)
    }

    @Delete(':id')
    deleteByID(@Param('id') id: string){
        const queryId = parseInt(id, 10)
        return this.habitat.deleteById(queryId)
    }
}