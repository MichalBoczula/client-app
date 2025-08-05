import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPayLoanComponent } from './client-pay-loan-component';

describe('ClientPayLoanComponent', () => {
  let component: ClientPayLoanComponent;
  let fixture: ComponentFixture<ClientPayLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientPayLoanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientPayLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
