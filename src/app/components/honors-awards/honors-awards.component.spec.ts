import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HonorsAwardsComponent } from './honors-awards.component';

describe('HonorsAwardsComponent', () => {
  let component: HonorsAwardsComponent;
  let fixture: ComponentFixture<HonorsAwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HonorsAwardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HonorsAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the section title', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Honors');
    expect(el.textContent).toContain('Recognition');
  });

  it('should display award cards', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('.award-card').length).toBeGreaterThan(0);
  });

  it('should include Best in Technology award', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Best in Technology');
  });

  it('should not include Toastmasters Area Director awards', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).not.toContain('Area D43 Director');
  });
});
