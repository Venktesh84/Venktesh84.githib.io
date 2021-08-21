import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  callDiv(div: string) {
    const element = this.renderer.selectRootElement(`#${div}`, true);
    element.scrollIntoView({ behavior: 'smooth' });
    this.closeNav();
  }
  
  openNav() {
    let div = "mySidebar";
    let div1 = "main";
    const element = this.renderer.selectRootElement(`#${div}`, true);
    const element1 = this.renderer.selectRootElement(`#${div1}`, true);
    element.style.width = "80px";
    element1.style.marginRight = "80px";
  }

  closeNav() {
    let div = "mySidebar";
    let div1 = "main";
    const element = this.renderer.selectRootElement(`#${div}`, true);
    const element1 = this.renderer.selectRootElement(`#${div1}`, true);
    element.style.width = "0";
    element1.style.marginRight = "0";
  }

  ngOnInit(): void {
  }
}
