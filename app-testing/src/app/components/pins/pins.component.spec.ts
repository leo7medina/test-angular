import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of, Subject } from 'rxjs';
import { PINS } from 'src/app/services/mocks/pins';
import { RepositoryService } from 'src/app/services/repository.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { PinsComponent } from './pins.component';
import { PinsService } from './pins.service';


class RepositoryServiceStub {
  observer = new Subject();

  getPins() {
    return this.observer;
  }

  resolvePins() {
    this.observer.next(JSON.parse(JSON.stringify(PINS)));
  }

  updatePin() {
    return of(true);
  }
}

class MatSnackBarStub {
  open() {}
}

class PinsServiceStub {
  observer = new Subject();
  $actionObserver = this.observer.asObservable();

  public resolve(action) {
    return this.observer.next(action);
  }
}

describe('PinsComponent', () => {
  let component: PinsComponent;
  let fixture: ComponentFixture<PinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ PinsComponent ],
      providers: [
        PinsService,
        { provider: RepositoryService, useClass: RepositoryServiceStub},
        { provider: MatSnackBar, useClass: MatSnackBarStub}

      ],
      imports: [MatSnackBarModule, ReactiveFormsModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('When new page is open', () => {
    const open = spyOn(window, 'open');
    component.openUrl('https://platzi.com');
    expect(open).toHaveBeenCalledWith('https://platzi.com', '_blank');
  });

  // it('When update progress', () => {
  //   component.pins = PINS;
  //   const pin = PINS[0];
  //   const updatePin = spyOn((<any>component).repository, 'updatePin');
  //   const open = spyOn((<any>component).snackBar, 'open');
  //   const pinService = TestBed.inject(PinsService);

  //   pinService.resolveActionObserver('save');

  //   expect(open).toHaveBeenCalled();
  // });
});
