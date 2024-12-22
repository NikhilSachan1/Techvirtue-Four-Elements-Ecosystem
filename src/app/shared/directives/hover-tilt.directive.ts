import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverTilt]'
})
export class HoverTiltDirective {

  private isMouseMove = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (!this.isMouseMove) {
      this.isMouseMove = true;
      requestAnimationFrame(() => {
        const rect = this.el.nativeElement.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((centerY - y) / centerY) * 20;
        const rotateY = ((x - centerX) / centerX) * 20;

        this.renderer.setStyle(
          this.el.nativeElement,
          'transform',
          `perspective(1000px) rotateX(${5 - rotateX}deg) rotateY(${rotateY}deg)`
        );

        this.isMouseMove = false;
      });
    }
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      'perspective(1000px) rotateX(5deg) rotateY(0deg)'
    );
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.3s ease-out');
  }

}
