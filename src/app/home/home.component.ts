import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  touringImages = [
    "../../assets/images/Manfredonia.jpg",
    "../../assets/images/camping.jpg",
    "../../assets/images/mountains.jpg",
    "../../assets/images/tour1.jpg",
    "../../assets/images/houseboat.jpg",
  ];

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  public isMenuCollapsed = true;


  scrollToElement($element :any ) {
    console.log($element);
    // $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    (document.getElementById($element) as HTMLFormElement).scrollTo({ behavior: "smooth", top: 0 });
  }

  ngOnInit(): void {
  }
 
}
