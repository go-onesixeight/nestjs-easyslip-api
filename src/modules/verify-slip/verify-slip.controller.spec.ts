import { Test, TestingModule } from '@nestjs/testing';
import { VerifySlipController } from './verify-slip.controller';
import { VerifySlipService } from './verify-slip.service';

describe('VerifySlipController', () => {
  let controller: VerifySlipController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VerifySlipController],
      providers: [VerifySlipService],
    }).compile();

    controller = module.get<VerifySlipController>(VerifySlipController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
