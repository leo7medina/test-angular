import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { LayoutComponent } from './layout.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ActionsComponent } from '../actions/actions.component';

class MatBottomSheetStub {
  open() {}
}

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutComponent ],
      providers: [
        { provide: MatBottomSheet, useClass: MatBottomSheetStub}
      ],
      imports: [
        MatButtonModule,
        RouterTestingModule.withRoutes([
          { path: '', component: LayoutComponent },
          { path: 'app/add', component: LayoutComponent }
        ])
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should open', () => {
    const open = spyOn((<any>component).bottomSheet, 'open');
    component.openBottomSheet();
    expect(open).toHaveBeenCalledWith(ActionsComponent);
  });

  it('Should set the editMode to false', () => {
    const verifyEditMode = spyOn(component, 'verifyEditMode').and.callThrough();
    fixture.ngZone.run( () => {
      (<any>component).router.navigate(['/']);
      fixture.whenStable().then(()=>{
        expect(component.editMode).toBeFalsy();
        expect(verifyEditMode).toHaveBeenCalled();
      });
    });
  })
});
