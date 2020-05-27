import { Component, OnInit, ViewChild } from '@angular/core';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('tw') typewriterElement: { nativeElement: any; };
  constructor() { }

  ngOnInit() {}

  ngAfterViewInit(){
    const target = this.typewriterElement.nativeElement
    const writer = new Typewriter(target, {
      loop: true, 
      typeColor: 'white',
      cursorColor: 'white'
    })
    
    writer
      .strings(
        400,
        "WEB DEVELOPER",
        "MOBILE DEVELOPER", 
        "FRONT-END DEVELOPER",
        "BACK-END DEVELOPER"
      )
      .start()
  }
}
