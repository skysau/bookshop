import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
 import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { AuthGardGuard } from './shared/auth-gard.guard';
import { AuthServiceService } from './shared/auth-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    BookDetailComponent,
    BookListComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGardGuard,AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
 