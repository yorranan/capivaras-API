import {IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator'

export class UpdateHabitatDTO{
    @IsString()
    @IsNotEmpty()
    name: string

    @IsBoolean()
    @IsOptional()
    is_enable: boolean
}