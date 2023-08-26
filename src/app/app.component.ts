import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oceanclub';
  ngOnInit() {
    let element= document.getElementById("preload") as HTMLElement;
    element.innerHTML = '<img width="35%"   src="../assets/pre.png">';
    setTimeout(() =>{element.classList.add("remove");}, 100);
    setTimeout(() =>{element.remove();}, 10000);
  }
}
