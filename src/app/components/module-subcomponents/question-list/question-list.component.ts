import { Component, OnInit } from '@angular/core';
import { Module } from 'src/app/module';
import { ActivatedRoute } from '@angular/router';
import { Answer } from 'src/app/answer';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { QuestionListService } from "../../../services/question-list.service";
import { Question } from 'src/app/Question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  public moduleCode: string = '';

  public questionList: Question[] = [];

  public questionListShown: Question[] = [];

  public questionEntered: string = '';

  public answerEntered: string = '';

  public ifPostAnAnswer: boolean[] = [];

  public ifAskAQuestion: boolean = false;

  public userName: string = 'Anonymous';

  constructor(public activatedRoute: ActivatedRoute, 
    public http: HttpClient,
    public questionListService: QuestionListService) { }

  ngOnInit(): void {
    this.ifPostAnAnswer = this.questionList.map((question: Question) => false);
    this.activatedRoute.queryParams.subscribe((data: any) => {
      this.moduleCode = data.moduleCode;
      this.updateQuestionList();
    })
  }

  updateQuestionList() {
    this.questionListService.getQuestionListOfModule(this.moduleCode).subscribe((quesitonList: Question[]) => {
      this.questionList = quesitonList;
      this.questionListShown = this.questionList.slice(0, 3);
    })
  }

  showQuestionForm() {
    this.ifAskAQuestion = true;
  }

  showAnswerForm(key: number) {
    this.ifPostAnAnswer[key] = true;
  }

  updateQuestionListShown(event: any) {
    var start = 3 * event.pageIndex;
    this.questionListShown = this.questionList.slice(start, start + 3);
  }

  onSubmitAnAnswer(question: Question, key:number) {
    var ans = new Answer(this.answerEntered, new Date().toLocaleDateString(), new Date().toLocaleTimeString().slice(0, 8), question.id);
    question.answerList.push(ans);
    var httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.http.post('/answers', ans, httpOptions).subscribe((answer: Answer) => {
      this.resetAnswerForm(key);
    });
  }

  onSubmitAQuestion() {
    this.questionListService.countNumOfQuestions().subscribe((numOfQuesitons: number) => {
      var question = new Question(
        this.questionEntered, 
        new Date().toLocaleDateString(),
        new Date().toLocaleTimeString().slice(0, 8),
        this.moduleCode,
        numOfQuesitons
      );
      this.questionListService.addQuestion(question).subscribe((question: Question) => {
        this.updateQuestionList();
        this.ifPostAnAnswer.unshift(false);
        this.resetQuestionForm();
      });
    })
  }

  resetAnswerForm(key:number) {
    this.ifPostAnAnswer[key] = false;
    this.answerEntered = '';
  }

  resetQuestionForm() {
    this.ifAskAQuestion = false;
    this.questionEntered = '';
  }
}
