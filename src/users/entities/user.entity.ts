import { ApiProperty } from '@nestjs/swagger/dist/decorators';

export class User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}
