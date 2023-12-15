import { Test, TestingModule } from '@nestjs/testing';
import { UploadFileSlipService } from './upload-file-slip.service';

describe('UploadFileSlipService', () => {
  let service: UploadFileSlipService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UploadFileSlipService],
    }).compile();

    service = module.get<UploadFileSlipService>(UploadFileSlipService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
