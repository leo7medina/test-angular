import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FormComponent } from './form.component';
import { RepositoryService } from 'src/app/services/repository.service';
import { NavigationService } from 'src/app/services/navigation.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormArray, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

class RepositoryServiceStub {
  savePins() {
    return of(true);
  }
}

class NavigationServiceStub {
  goToPins() {}
}

class MatSnackBarStub {
  open() {
    return {
      afterDismissed: () => {
        return of(true);
      }
    }
  }
}

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      providers: [
        { provide: RepositoryService, useClass: RepositoryServiceStub },
        { provide: NavigationService, useClass: NavigationServiceStub },
        { provide: MatSnackBar, useClass: MatSnackBarStub }
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the forms', ()=> {
    expect(Object.keys(component.firstFormGroup.controls)).toEqual(['title', 'author', 'description']);
    expect(Object.keys(component.secondFormGroup.controls)).toEqual(['firstAsset','assets']);
  });

  it('Should add new group', () => {
    const assets = <FormArray>component.secondFormGroup.get('assets');
    component.addAsset();
    component.addAsset();
    console.log(Object.keys(assets.controls));
    expect(Object.keys(assets.controls)).toEqual(['0','1']);
  });

  describe('When deleteAssets', () => {
    it('Should remove the form control', () => {
      const assets = <FormArray>component.secondFormGroup.get('assets');
      component.addAsset();
      component.deleteAsset(0);
      expect(Object.keys(assets.controls)).toEqual([]);
    })
  });

  describe('When savePins is executed', () => {
    it('Should navigate to pins view ', () => {
      const navigate = spyOn((<any>component).navigate,'goToPins');
      const open = spyOn((<any>component).snackBar, 'open').and.callThrough();
      component.savePin();
      expect(navigate).toHaveBeenCalled();
      console.log('working');
      expect(open).toHaveBeenCalledWith('Your pin is saved, Redirecting ...', 'Cool!', {duration: 2000});
    })
  });
});
