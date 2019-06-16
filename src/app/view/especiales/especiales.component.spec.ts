import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialesComponent } from './especiales.component';

describe('EspecialesComponent', () => {
  let component: EspecialesComponent;
  let fixture: ComponentFixture<EspecialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspecialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspecialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
