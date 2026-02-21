import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrangeInspirationComponent } from './orange-inspiration.component';

describe('OrangeInspirationComponent', () => {
  let component: OrangeInspirationComponent;
  let fixture: ComponentFixture<OrangeInspirationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrangeInspirationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrangeInspirationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the section title', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Orange Inspiration');
  });

  it('should display 4 tech tags', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('.oi-tag').length).toBe(4);
  });
});
