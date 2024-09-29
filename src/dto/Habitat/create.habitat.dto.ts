import { IsBoolean, IsNotEmpty, IsString, IsOptional} from "class-validator";

export class CreateHabitatDTO{
    @IsString()
    @IsNotEmpty()
    name: string

    @IsBoolean()
    @IsOptional()
    is_enable: boolean

}