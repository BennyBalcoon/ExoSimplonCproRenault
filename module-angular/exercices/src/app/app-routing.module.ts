import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExerciceD1Component } from "./exercices/4-services/exercice-d1/exercice-d1.component";
import { ExerciceA6Component } from "./exercices/1-expressions/exercice-a6/exercice-a6.component";
import { ExerciceB7Component } from "./exercices/2-proprietes-evenements/exercice-b7/exercice-b7.component";

const routes: Routes = [
  {
    path: "services-exo1",
    component: ExerciceD1Component,
  },
  {
    path: "expressions-exo6",
    component: ExerciceA6Component,
  },
  {
    path: "proprietes-evenements-exo7",
    component: ExerciceB7Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
