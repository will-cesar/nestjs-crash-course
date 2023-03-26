import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import { IsAlphanumeric, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty() // exibe a propriedade no swagger
  @IsAlphanumeric() // decorator para validar se o valor da propriedade é alfanumérico. É importado da lib class-validator
  @MaxLength(10)
  name: string;
}
