import { IsDate, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateNoteDTO{
    @IsNotEmpty()
    @IsDate()
    date: Date
}