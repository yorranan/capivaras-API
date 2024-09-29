import { Habitat, healthStatus } from "@prisma/client";
import { IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateCapybaraDTO{
    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
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