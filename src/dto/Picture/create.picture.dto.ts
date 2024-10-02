import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreatePictureDTO{
    @IsNotEmpty()
    @IsInt()
    capybaraId: number
    link?: string; 
}