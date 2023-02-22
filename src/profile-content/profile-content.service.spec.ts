import { Test, TestingModule } from '@nestjs/testing';
import { ProfileContentService } from './profile-content.service';

describe('ProfileContentService', () => {
  let service: ProfileContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileContentService],
    }).compile();

    service = module.get<ProfileContentService>(ProfileContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
