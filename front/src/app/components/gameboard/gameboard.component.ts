import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { trigger, style, animate, transition } from '@angular/animations';
import { AnswersService } from '../../services/answers.service';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.css'],
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
export class GameboardComponent implements OnInit {
  dummyAnswers:any[];
  guess:string = "";
  answer:string = "";
  points:number = 0;
  misses:string[] = [];
  hits:string[] = [];
  score:number = 0;
  constructor(
    private router: Router,
    private answers: AnswersService
  ) {
  }

  ngOnInit() {
    this.answers.getAnswers().subscribe((resp) => {
      if (resp) {
        this.dummyAnswers = resp.json();
        let data = this.dummyAnswers[Math.floor(Math.random() * this.dummyAnswers.length)];
        this.answer = data.name;
        this.points = data.points;
      }
    })
  }

  onFinish() {
    localStorage.setItem("score", this.score.toString());
    localStorage.setItem("currentAnswer", this.answer);
    this.router.navigate([`timeup`]);
  }

  drawBoard() {
      let answer = this.answer.split("");
      let board = [];
      if (this.hits.length == 0 || this.hits == undefined) {
        answer.forEach((letter) => {
          board.push("_");
        })
        return board.join("");
      } else {
        answer.forEach((letter) => {
          if (this.hits.includes(letter.toLowerCase())) {
            board.push(letter);
          } else {
            board.push("_");
          }
        })
        return board.join("");
      }
    }

    isLetter(str) {
      return str.length === 1 && str.match(/[a-z]/i);
    }

    handleGuess(form) {
        if (form.value.guess !== "" && form.value.guess !== null && this.isLetter(form.value.guess) ) {
          this.guess = form.value.guess;
          if (this.answer.toLowerCase().includes(this.guess.toLowerCase())) {
            if (!this.hits.includes(this.guess.toLowerCase())) {
              this.hits.push(this.guess)
              this.checkIfWin();
            }
          } else {
            if (!this.misses.includes(this.guess.toLowerCase())) {
              this.misses.push(this.guess);
            }
          }
          if (this.misses.length > 5) {
            this.youLose();
          }
          form.reset();
        }
    }

    checkIfWin() {
      if (this.drawBoard().toLowerCase() === this.answer.toLowerCase()) {
        let index = this.dummyAnswers.findIndex(i => i.name === this.answer);
        this.dummyAnswers.splice(index, 1);
        this.score += this.points;
        this.startNewRound();
      }
    }

    startNewRound() {
      this.hits = [];
      this.misses = [];
      if (this.dummyAnswers.length > 0) {
        let newAnswer = this.dummyAnswers[Math.floor(Math.random() * this.dummyAnswers.length)];
        this.answer = newAnswer.name;
        this.points = newAnswer.points;
      }
    }

    youLose() {
      localStorage.setItem("score", this.score.toString());
      localStorage.setItem("currentAnswer", this.answer);
      this.router.navigate([`timeup`]);
    }

}
