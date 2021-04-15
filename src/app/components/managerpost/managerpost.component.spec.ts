import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerpostComponent } from './managerpost.component';

describe('ManagerpostComponent', () => {
  let component: ManagerpostComponent;
  let fixture: ComponentFixture<ManagerpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
