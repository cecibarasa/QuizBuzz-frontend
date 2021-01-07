import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiestionComponent } from './quiestion.component';

describe('QuiestionComponent', () => {
  let component: QuiestionComponent;
  let fixture: ComponentFixture<QuiestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuiestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuiestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
