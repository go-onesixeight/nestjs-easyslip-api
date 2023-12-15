import { Test, TestingModule } from '@nestjs/testing';
import { VerifySlipService } from './verify-slip.service';

describe('VerifySlipService', () => {
  let service: VerifySlipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VerifySlipService],
    }).compile();

    service = module.get<VerifySlipService>(VerifySlipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
