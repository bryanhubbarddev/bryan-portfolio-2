import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentationsComponent } from './presentations.component';

describe('PresentationsComponent', () => {
  let component: PresentationsComponent;
  let fixture: ComponentFixture<PresentationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PresentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 3 presentation cards', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('.pres-card').length).toBe(3);
  });
});
