import { Injectable } from '@nestjs/common';
import { FirebaseAdminService } from '../../firebase-admin.service';
import { CreatePictureDTO } from '../dto/Picture/create.picture.dto';
import { Multer } from 'multer'

@Injectable()
export class PictureService {
  constructor(private firebaseAdminService: FirebaseAdminService) {}

  async uploadPicture(file: Multer.File, createPictureDTO: CreatePictureDTO): Promise<CreatePictureDTO> {
    const bucket = this.firebaseAdminService.getStorage();
    const fileName = `${Date.now()}_${file.originalname}`;
    const fileUpload = bucket.file(fileName);

    await fileUpload.save(file.buffer, {
      metadata: {
        contentType: file.mimetype,
      },
    });

    const [url] = await fileUpload.getSignedUrl({
      action: 'read',
      expires: '03-01-2500',
    });

    // Adiciona a URL ao DTO
    return { ...createPictureDTO, link: url };
  }
}