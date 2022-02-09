import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PlayComponent } from './pages/play/play.component';
import { ScoreComponent } from './pages/score/score.component';
import { PlayService } from './services/play.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayComponent,
    ScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [PlayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
