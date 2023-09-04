import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComparePasswordPage } from './compare-password.page';

describe('ComparePasswordPage', () => {
  let component: ComparePasswordPage;
  let fixture: ComponentFixture<ComparePasswordPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComparePasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
