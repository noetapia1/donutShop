import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonutDetailComponent } from './components/donut-detail/donut-detail.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path: 'donutList', component: HomePageComponent},
  {path: 'donutDetail/:id', component: DonutDetailComponent},
  {path: '', redirectTo: '/donutList', pathMatch:'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
