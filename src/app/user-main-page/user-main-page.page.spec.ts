import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserMainPagePage } from './user-main-page.page';

describe('UserMainPagePage', () => {
  let component: UserMainPagePage;
  let fixture: ComponentFixture<UserMainPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UserMainPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
