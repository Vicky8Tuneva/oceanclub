import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oceanclub';  
  ngAfterViewInit() {
  
    let element= document.getElementById("preload") as HTMLElement;
    
    setTimeout(() =>{
    element.classList.add("remove");
    
    setTimeout(() =>{
    element.remove();
    }, 3500);
    
    }, 300);
  }
}