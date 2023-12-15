import { Module } from '@nestjs/common';
import { VerifySlipRepositoryService } from './verify-slip-repository/verify-slip-repository.service';

@Module({
  imports: [],
  providers: [VerifySlipRepositoryService],
  exports: [VerifySlipRepositoryService]
})
export class RepositoriesModule { }
