import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faMobileAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitterSquare, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;
  faMobileAlt = faMobileAlt;
  faEnvelope = faEnvelope;
  faLinkedin = faLinkedin;
  faTwitterSquare = faTwitterSquare;
  faFacebook = faFacebook;

  constructor() { }

  ngOnInit(): void {
  }

}
