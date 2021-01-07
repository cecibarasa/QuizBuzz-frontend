import { GlobalService } from 'src/app/services/global.service';
import { EndpointsService } from './endpoints.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizzesService {

  constructor(
    private http: HttpClient,
    private endpoints: EndpointsService,
    private globalService: GlobalService
  ) { }

  getQuizzes() {
    return this.http.get(this.endpoints.quizzes());
  }

  getQuiz(slug: string) {
    return this.http.get(this.endpoints.quiz(slug));
  }

  saveAnswer(body) {
    return this.http.patch(this.endpoints.saveAnswer(), body, );
  }

  submitQuiz(body, slug) {
    return this.http.post(this.endpoints.submitQuiz(slug), body,);
  }

  getSubmitQuiz(slug) {
    return this.http.get(this.endpoints.submitQuiz(slug));
  }

}
