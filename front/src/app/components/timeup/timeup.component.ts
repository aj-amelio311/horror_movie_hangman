import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
import { GetscoresService } from '../../services/getscores.service';
import { AddscoreService } from '../../services/addscore.service';

@Component({
  selector: 'app-timeup',
  templateUrl: './timeup.component.html',
  styleUrls: ['./timeup.component.css'],
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
export class TimeupComponent implements OnInit {
  score:number;
  highScoreCheck:boolean = false;
  minHighScore:number = 5;
  answer:string;
  played:boolean = false;
  highScoresDummy:any[];
  constructor(
    private route:ActivatedRoute,
    private _router:Router,
    private _scores: GetscoresService,
    private _addScore:AddscoreService
  ) {
  }

  ngOnInit() {
      this.score = parseInt(localStorage.getItem("score"));
      if (localStorage.getItem("currentAnswer") !== null) {
        this.played = true;
        this.answer = localStorage.getItem("currentAnswer");
      }
      this.scoreCheck();
  }

  scoreCheck() {
    this._scores.getScores().subscribe((resp) => {
      this.highScoresDummy = resp.json();
      this.minHighScore = this.highScoresDummy[this.highScoresDummy.length - 1].score
      if (this.score > this.minHighScore ) {
        this.highScoreCheck = true;
      } else {
        this.highScoreCheck = false;
          localStorage.clear();
      }
    })
  }

  addHighScore(form) {
    let username = form.value.username;
    let score = localStorage.getItem("score")
    var date = new Date();
    let request = {
      "user": username,
      "score": parseInt(score),
      "date": date
    }
    let jsonRequest = JSON.stringify(request);
      this._addScore.addScoretoDB(jsonRequest).subscribe((resp) => {
        if (resp.status == 200) {
          localStorage.clear();
          this._router.navigate(["scoreboard"])
        } else {
          localStorage.clear();
          alert("Uh-oh! Something went wrong!")
        }
      })
  }

}
