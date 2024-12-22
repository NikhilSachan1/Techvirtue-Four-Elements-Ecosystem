import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  setTheme(themeType: string): void {
    const rootElement = document.documentElement;    
    this.renderer.setAttribute(rootElement, 'class', themeType);
  }
}
