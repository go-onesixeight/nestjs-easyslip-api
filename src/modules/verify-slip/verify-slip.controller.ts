import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { VerifySlipService } from './verify-slip.service';

@ApiTags('Verify-Slip')
@Controller('verify-slip')
export class VerifySlipController {
  uploadService: any;
  constructor(private readonly verifySlipService: VerifySlipService) { }

  @Post('upload')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('file'))
  uploadFiles(
    @UploadedFile() file: Express.Multer.File,
  ) {
    console.log(file)
    return this.verifySlipService.uploadFileSlip(file);
  }
}

