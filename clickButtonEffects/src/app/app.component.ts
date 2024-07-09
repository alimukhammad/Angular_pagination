import { Component, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // <app-root></app-root>
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private renderer: Renderer2) {}
  title = 'clickButtonEffects';
  clickCount = 0;

  buttonEffect(){
      let container = document.querySelector<HTMLElement>('.container');
      this.clickCount++;
      /* add border styling to the container */
      if(container){
        if(this.clickCount % 2 !== 0){
          this.renderer.addClass(container, 'borderEffect');
          this.renderer.removeClass(container, 'noBorder');
        } else {
          this.renderer.addClass(container, 'noBorder');
          this.renderer.removeClass(container, 'borderEffect');
        }
      }
      console.log('Button Clicked');
  }
}
