import { Module } from '@nestjs/common';
import { UsecasesModule } from '../../usecases/usecases.module';
import { VerifySlipController } from './verify-slip.controller';
import { VerifySlipService } from './verify-slip.service';

@Module({
  imports: [UsecasesModule],
  controllers: [VerifySlipController],
  providers: [VerifySlipService]
})
export class VerifySlipModule { }
