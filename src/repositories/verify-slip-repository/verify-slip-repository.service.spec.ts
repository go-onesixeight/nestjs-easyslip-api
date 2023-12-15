import { Test, TestingModule } from '@nestjs/testing';
import { VerifySlipRepositoryService } from './verify-slip-repository.service';

describe('VerifySlipRepositoryService', () => {
  let service: VerifySlipRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VerifySlipRepositoryService],
    }).compile();

    service = module.get<VerifySlipRepositoryService>(VerifySlipRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
