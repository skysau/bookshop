import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AuthGardGuard } from './shared/auth-gard.guard';

const routes: Routes = [
  {
    path:'',redirectTo:'log-in', pathMatch:'full'
  },
  {
    path:'log-in',component:LogInComponent
  },
  {
    path:'book-list',component:BookListComponent,canActivate :[AuthGardGuard]
},
{
  path:'add-book',component:AddBookComponent,canActivate :[AuthGardGuard]
},
{
  path:'update-book/:id',component:BookDetailComponent,canActivate :[AuthGardGuard]
},
// {
//   path:'**' , component:LogInComponent
// }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
