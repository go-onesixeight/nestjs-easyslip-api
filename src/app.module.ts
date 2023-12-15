import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VerifySlipModule } from './modules/verify-slip/verify-slip.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { UsecasesModule } from './usecases/usecases.module';

@Module({
  imports: [VerifySlipModule, RepositoriesModule, UsecasesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
