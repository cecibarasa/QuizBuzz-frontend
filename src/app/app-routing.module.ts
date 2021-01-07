import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './web/auth/auth.component';
import { AuthGuardService } from './guards/auth-guard.service';
// import { UnAuthGuardService } from './guards/unauth-guard.service';

import { QuizResultComponent } from './web/quizzes/quiz-result/quiz-result.component';
import { QuizDetailComponent } from './web/quizzes/quiz-detail/quiz-detail.component';
import { QuizListComponent } from './web/quizzes/quiz-list/quiz-list.component';
import { QuizzesComponent } from './web/quizzes/quizzes.component';
import { RegisterComponent } from './web/auth/register/register.component';
import { LoginComponent } from './web/auth/login/login.component';



const routes: Routes = [
  { path: 'auth/login', component: LoginComponent},
  { path: 'auth/register', component: RegisterComponent},
  {path:'', redirectTo:'auth/login', pathMatch:'full'},



  // {
  //   path: 'auth',
  //   component: AuthComponent,
  //   canActivate: [UnAuthGuardService],
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'login',
  //       pathMatch: 'full'
  //     },
  //     {
  //       path: 'login',
  //       component: LoginComponent
  //     },
  //     {
  //       path: 'register',
  //       component: RegisterComponent
  //     }
  //   ]
  // },
  {
    path: 'quizzes',
    component: QuizzesComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        redirectTo: 'all',
        pathMatch: 'full'
      },
      {
        path: 'all',
        component: QuizListComponent
      },
      {
        path: ':slug',
        component: QuizDetailComponent
      },
      {
        path: ':slug/result',
        component: QuizResultComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
