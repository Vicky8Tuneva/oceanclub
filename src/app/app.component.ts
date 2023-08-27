import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oceanclub';
  /*ngOnInit() {
    let element= document.getElementById("preload") as HTMLElement;
    element.innerHTML = '<div class="preloadImg"></div>';
    setTimeout(() =>{element.classList.add("remove");}, 100);
    setTimeout(() =>{element.remove();}, 4000);
  }*/
  ngOnInit() {

  }
  
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