import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { GetscoresService } from '../../services/getscores.service';

@Component({
  selector: 'app-highscore',
  templateUrl: './highscore.component.html',
  styleUrls: ['./highscore.component.css'],
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
export class HighscoreComponent implements OnInit {
  scores:any[];
  constructor(private _scores:GetscoresService) { }

  ngOnInit() {
    localStorage.clear();
    this._scores.getScores().subscribe((resp) => {
      this.scores = resp.json().slice(0, 5)
    })
  }

}
