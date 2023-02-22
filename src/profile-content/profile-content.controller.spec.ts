import { Test, TestingModule } from '@nestjs/testing';
import { ProfileContentController } from './profile-content.controller';

describe('ProfileContentController', () => {
  let controller: ProfileContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileContentController],
    }).compile();

    controller = module.get<ProfileContentController>(ProfileContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
