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

  it('should render Tech Ed slides with 3 images', () => {
    const el = fixture.nativeElement as HTMLElement;
    const cards = Array.from(el.querySelectorAll('.pres-card')) as HTMLElement[];
    const techEdCard = cards.find(card =>
      card.textContent && card.textContent.includes('Tech Ed')
    );
    expect(techEdCard).withContext('Tech Ed presentation card not found').toBeTruthy();
    if (!techEdCard) return;
    const slideImages = techEdCard.querySelectorAll('.pres-slides img');
    expect(slideImages.length).toBe(3);
  });

  it('should render HomerCon with a video and source element', () => {
    const el = fixture.nativeElement as HTMLElement;
    const cards = Array.from(el.querySelectorAll('.pres-card')) as HTMLElement[];
    const homerConCard = cards.find(card =>
      card.textContent && card.textContent.includes('HomerCon')
    );
    expect(homerConCard).withContext('HomerCon presentation card not found').toBeTruthy();
    if (!homerConCard) return;
    const video = homerConCard.querySelector('video') as HTMLVideoElement | null;
    expect(video).withContext('HomerCon video element not found').toBeTruthy();
    if (!video) return;
    const source = video.querySelector('source') as HTMLSourceElement | null;
    expect(source).withContext('HomerCon video source element not found').toBeTruthy();
    if (!source) return;
    expect(source.src || source.getAttribute('src')).withContext('HomerCon video source src should not be empty').toBeTruthy();
  });

  it('should render Toastmasters with an external link', () => {
    const el = fixture.nativeElement as HTMLElement;
    const cards = Array.from(el.querySelectorAll('.pres-card')) as HTMLElement[];
    const toastmastersCard = cards.find(card =>
      card.textContent && card.textContent.includes('Toastmasters')
    );
    expect(toastmastersCard).withContext('Toastmasters presentation card not found').toBeTruthy();
    if (!toastmastersCard) return;
    const link = toastmastersCard.querySelector('a.pres-link') as HTMLAnchorElement | null;
    expect(link).withContext('Toastmasters external link not found').toBeTruthy();
    if (!link) return;
    expect(link.href).withContext('Toastmasters link href should not be empty').toBeTruthy();
    expect(link.textContent && link.textContent.trim().length > 0)
      .withContext('Toastmasters link label should not be empty')
      .toBeTrue();
  });
});
