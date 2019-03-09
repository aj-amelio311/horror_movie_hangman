import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
     trigger('slide', [
       transition("void=>*", [
         style({transform: "translateY(-90px)"}),
         animate(150)
       ])
     ]),
     trigger('fade', [
       transition("void=>*", [
         style({opacity: 0}),
         animate(150)
       ])
     ])
    ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.clear();
  }

}
