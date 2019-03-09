import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CountdownModule } from 'ngx-countdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GameboardComponent } from './components/gameboard/gameboard.component';
import { HighscoreComponent } from './components/highscore/highscore.component';
import { TimeupComponent } from './components/timeup/timeup.component';

const appRoutes = [
  {path: "", component: HomeComponent},
  {path: "scoreboard", component: HighscoreComponent},
  {path: "play", component: GameboardComponent},
  {path: "timeup", component: TimeupComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameboardComponent,
    HighscoreComponent,
    TimeupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    FormsModule,
    CountdownModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TimeupComponent]
})
export class AppModule { }
