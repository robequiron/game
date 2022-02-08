import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PlayComponent } from './pages/play/play.component';
import { ScoreComponent } from './pages/score/score.component';
/**
 * Rutas
 */
const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'play', component: PlayComponent},
  {path:'score', component:ScoreComponent},
  {path:'**', component:HomeComponent},  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
