import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogModel } from './confirm-box.component';

describe('ConfirmBoxComponent', () => {
  let component: ConfirmDialogModel;
  let fixture: ComponentFixture<ConfirmDialogModel>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmDialogModel ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDialogModel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
