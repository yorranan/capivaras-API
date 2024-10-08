import { healthStatus } from "@prisma/client";
import { IsInt, IsNotEmpty, IsString, IsOptional } from "class-validator";

export class UpdateCapybaraDTO{
    @IsOptional()
    @IsString()
    name: string

    @IsOptional()
    @IsInt()
    age: number

    @IsOptional()
    weight: number

    @IsNotEmpty()
    health: healthStatus

    @IsNotEmpty()
    @IsInt()
    habitatId: number

}