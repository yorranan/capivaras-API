import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateCapybaraNoteDTO{
    @IsNotEmpty()
    @IsInt()
    capybaraId: number

    @IsNotEmpty()
    @IsInt()
    noteId: number

    @IsString()
    @IsOptional()
    comportament: string

    @IsString()
    @IsOptional()
    observations: string

    @IsInt()
    @IsOptional()
    habitatId: number
}