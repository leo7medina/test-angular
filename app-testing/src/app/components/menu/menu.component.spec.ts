import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Testing output', () => {
    const val = true;
    component.clicked.subscribe(result => {
      expect(result).toBe(val);
    });
    component.clicked.next(val);
  });

  it('Testing click', () => {
    let button = fixture.debugElement.query(By.css('button'));
    console.log(component.counter);
    button.triggerEventHandler('click', null);
    console.log(component.counter);
    expect(component.counter).toBe(1);
  })
});
