import {IsString, IsNotEmpty, IsOptional, IsBoolean, IsInt } from 'class-validator'

export class UpdateHabitatDTO{
    @IsInt()
    @IsNotEmpty()
    id: number

    @IsString()
    @IsOptional()
    name: string

    @IsBoolean()
    @IsOptional()
    is_enable: boolean
}