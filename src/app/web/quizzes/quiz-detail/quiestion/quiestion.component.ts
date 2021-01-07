import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quiestion',
  templateUrl: './quiestion.component.html',
  styleUrls: ['./quiestion.component.scss']
})
export class QuiestionComponent implements OnInit {
  @Input()
  question;

  @Input()
  selectedAnswer;

  @Output()
  selectAnswer = new EventEmitter<any>()

  callParent(id: number) {
    this.selectAnswer.next(id);
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.question);
  }

}
