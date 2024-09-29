import { healthStatus } from "@prisma/client";
import { IsInt, IsNotEmpty, IsString, IsOptional } from "class-validator";

export class UpdateCapybarasDTO{

    @IsNotEmpty()
    @IsInt()
    id: number
    
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