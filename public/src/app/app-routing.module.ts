import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RosterComponent } from './roster/roster.component';
import { StatusComponent } from './status/status.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {path: "roster", component: RosterComponent, children: [
    {path: "list", component: ListComponent},
    {path: "add", component: AddComponent},
    {path: "", pathMatch: 'prefix', redirectTo: "list"},
  ]},
  {path: "status", component: StatusComponent},
  {path: "", pathMatch: "full", redirectTo: "roster"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
