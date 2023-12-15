import { Module } from '@nestjs/common';
import { RepositoriesModule } from '../repositories/repositories.module';
import { UploadFileSlipService } from './verify-slip/upload-file-slip/upload-file-slip.service';

@Module({
  imports: [RepositoriesModule],
  providers: [UploadFileSlipService],
  exports: [UploadFileSlipService],
})
export class UsecasesModule { }
