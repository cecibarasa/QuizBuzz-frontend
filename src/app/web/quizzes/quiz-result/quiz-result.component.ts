import { Component, OnInit } from '@angular/core';
import { QuizzesService } from 'src/app/services/quizzes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss']
})
export class QuizResultComponent implements OnInit {

  results;

  constructor(
    private quizzesService: QuizzesService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let slug=this.route.snapshot.params.slug;
    this.quizzesService.getSubmitQuiz(slug).subscribe(res=>{
      console.log(res)
      this.results=res
    })
  }

}