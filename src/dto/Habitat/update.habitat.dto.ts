import {IsString, IsNotEmpty, IsOptional, IsBoolean, IsInt } from 'class-validator'

export class UpdateHabitatDTO{
    @IsString()
    @IsOptional()
    name: string

    @IsBoolean()
    @IsOptional()
    is_enable: boolean
}