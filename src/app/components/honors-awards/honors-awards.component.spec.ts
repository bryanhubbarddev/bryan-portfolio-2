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
    expect(el.textContent).toContain('Awards');
  });
});
