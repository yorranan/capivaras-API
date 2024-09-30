import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateNoteDTO{
    @IsNotEmpty()
    @IsInt()
    capybaraId: number

    @IsString()
    @IsOptional()
    comportament: string

    @IsString()
    @IsOptional()
    observations: string
}