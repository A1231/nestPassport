import { IsString, IsNotEmpty, MinLength, IsArray, IsEnum, IsOptional } from 'class-validator';
import { Role } from '../../enums/role.enum';

export class CreateUserDto {
    userId: number;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    username: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @IsArray()
    @IsEnum(Role, { each: true })
    //@IsOptional()
    roles?: Role[];
}