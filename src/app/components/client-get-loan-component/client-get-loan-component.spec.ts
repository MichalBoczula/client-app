import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientGetLoanComponent } from './client-get-loan-component';

describe('ClientGetLoanComponent', () => {
  let component: ClientGetLoanComponent;
  let fixture: ComponentFixture<ClientGetLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientGetLoanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientGetLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
