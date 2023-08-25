import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oceanclub';
  ngAfterViewInit() {
    document.addEventListener('DOMContentLoaded', () =>{
      let element=
      document.getElementById("preload") as HTMLElement;
      element.classList.add("remove");
      setTimeout(() =>{element.remove();}, 10000);
    });
  }
}
