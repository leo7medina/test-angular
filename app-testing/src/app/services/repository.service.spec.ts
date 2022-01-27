import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RepositoryService } from './repository.service';

describe('RepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [RepositoryService]
  }));

  it('should be created', () => {
    const service: RepositoryService = TestBed.inject(RepositoryService);
    expect(service).toBeTruthy();
  });
});
