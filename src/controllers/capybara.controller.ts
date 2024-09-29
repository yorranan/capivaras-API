import { Controller, Get, Post } from '@nestjs/common';

@Controller('capybara')
export class CapybaraController {
    @Get()
    getAll(){
        console.log('Get All Habitats')
    }
    
    @Get('id')
    getById(){
        console.log('Get BY ID HABITAT')
    }
    
    @Post('create')
    create(){
        console.log('post CREATE')
    }

    @Post('update')
    update(){
        console.log('post UPDATE')
    }
}
