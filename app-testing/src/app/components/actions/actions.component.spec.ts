import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { PinsService } from '../pins/pins.service';
import { ActionsComponent } from './actions.component';

class MatBottomSheetRefStub {
  dismiss() {}
}

describe('ActionsComponent', () => {
  let component: ActionsComponent;
  let fixture: ComponentFixture<ActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsComponent ],
      providers: [
        { provide: MatBottomSheetRef, useClass: MatBottomSheetRefStub },
        PinsService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
