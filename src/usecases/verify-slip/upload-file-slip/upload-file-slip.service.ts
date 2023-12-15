import { Injectable } from '@nestjs/common';
import { VerifySlipRepositoryService } from '../../../repositories/verify-slip-repository/verify-slip-repository.service';

@Injectable()
export class UploadFileSlipService {
  constructor(
    private readonly verifySlipRepositoryService: VerifySlipRepositoryService,
  ) { }

  async execute(file: Express.Multer.File) {
    let formData: FormData = new FormData();
    formData.append('file', new Blob([file.buffer]));

    const data = await this.verifySlipRepositoryService.verifySlip(formData);
    return data;
  }
}
