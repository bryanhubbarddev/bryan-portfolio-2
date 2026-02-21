import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the section title', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Skills');
    expect(el.textContent).toContain('Technologies');
  });

  it('should display 7 skill cards', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('.skill-card').length).toBe(7);
  });
});
