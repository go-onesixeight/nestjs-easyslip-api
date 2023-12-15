import { Injectable } from '@nestjs/common';
import { UploadFileSlipService } from '../../usecases/verify-slip/upload-file-slip/upload-file-slip.service';

@Injectable()
export class VerifySlipService {
  constructor(private readonly uploadFileSlipService: UploadFileSlipService) { }

  async uploadFileSlip(file: Express.Multer.File) {
    try {
      return await this.uploadFileSlipService.execute(file);
    } catch (error) {
      console.log('error', error);
    }
  }
}
