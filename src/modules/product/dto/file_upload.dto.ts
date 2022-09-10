import { ApiProperty } from '@nestjs/swagger';
import { File } from '../types';

export class FileUploadDto {

  @ApiProperty({ type: 'string', format: 'binary' })
  file: File;
}
