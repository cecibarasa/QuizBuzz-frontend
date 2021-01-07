import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, } from "@angular/common/http";
import { EndpointsService } from './services/endpoints.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenInterceptorService} from './guards/token-interceptor.service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './web/auth/register/register.component';
import { LoginComponent } from './web/auth/login/login.component';
import { QuizzesComponent } from './web/quizzes/quizzes.component';
import { QuizResultComponent } from './web/quizzes/quiz-result/quiz-result.component';
import { QuizListComponent } from './web/quizzes/quiz-list/quiz-list.component';
import { QuizDetailComponent } from './web/quizzes/quiz-detail/quiz-detail.component';
import { QuiestionComponent } from './web/quizzes/quiz-detail/quiestion/quiestion.component';
import { AnswerComponent } from './web/quizzes/quiz-detail/quiestion/answer/answer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, ɵHttpInterceptingHandler } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { GlobalService } from './services/global.service';
import { AuthGuardService } from './guards/auth-guard.service';
import { AuthComponent } from './web/auth/auth.component';
// import { UnAuthGuardService } from './guards/unauth-guard.service';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    QuizzesComponent,
    QuizResultComponent,
    QuizListComponent,
    QuizDetailComponent,
    QuiestionComponent,
    AnswerComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    CookieService,
    AuthGuardService,
    // UnAuthGuardService,
    AuthService,
    EndpointsService,
    GlobalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
