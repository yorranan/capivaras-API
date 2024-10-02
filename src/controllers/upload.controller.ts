import { Controller, Post, UploadedFile, UseInterceptors, Body } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PictureService } from '../services/picture.service'
import { CreatePictureDTO } from '../dto/Picture/create.picture.dto';
import { Multer } from 'multer'

@Controller('pictures')
export class PictureController {
  constructor(private pictureService: PictureService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadPicture(@UploadedFile() file: Multer.File, @Body() createPictureDTO: CreatePictureDTO) {
    const updatedDTO = await this.pictureService.uploadPicture(file, createPictureDTO);
    return updatedDTO;
  }
}