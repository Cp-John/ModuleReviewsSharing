import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Answer } from 'src/app/answer';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { QuestionListService } from "../../../services/question-list.service";
import { Question } from 'src/app/Question';
import { AdminAccountService } from 'src/app/services/admin-account.service';

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

  public isSuccessfulLogin: boolean = false;

  public pageIndex: number = 0;

  constructor(public activatedRoute: ActivatedRoute,
    public http: HttpClient,
    public questionListService: QuestionListService,
    public adminAccountService: AdminAccountService) { }

  ngOnInit(): void {
    if (this.adminAccountService.getAdminAccount()) {
      this.isSuccessfulLogin = true;
    }
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
    this.pageIndex = event.pageIndex;
    var start = 3 * this.pageIndex;
    this.questionListShown = this.questionList.slice(start, start + 3);
  }

  onSubmitAnAnswer(question: Question, key: number) {
    var ans = new Answer(this.answerEntered, new Date().toLocaleDateString(), new Date().toLocaleTimeString().slice(0, 8), question._id);
    var httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    this.http.post('/answers', ans, httpOptions).subscribe((answer: Answer) => {
      question.answerList.push(answer);
      this.resetAnswerForm(key);
    });
  }

  deleteAnswer(question: Question, answerId: string) {
    this.http.delete('/answers/delete/' + answerId).subscribe((answer: Answer) => {
      question.answerList = question.answerList.filter((ans: Answer) => {
        return ans._id != answerId;
      })
    });
  }

  deleteQuestion(questionId: string) {
    this.questionListService.deleteQuestion(questionId).subscribe((question: Question) => {
      this.questionListService.getQuestionListOfModule(this.moduleCode).subscribe((quesitonList: Question[]) => {
        this.questionList = quesitonList;
        var start = this.pageIndex * 3;
        this.questionListShown = this.questionList.slice(start, start + 3);
      })
    })
  }

  onSubmitAQuestion() {
    var question = new Question(
      this.questionEntered,
      new Date().toLocaleDateString(),
      new Date().toLocaleTimeString().slice(0, 8),
      this.moduleCode
    );
    this.questionListService.addQuestion(question).subscribe((question: Question) => {
      this.updateQuestionList();
      this.ifPostAnAnswer.unshift(false);
      this.resetQuestionForm();
    });
  }

  resetAnswerForm(key: number) {
    this.ifPostAnAnswer[key] = false;
    this.answerEntered = '';
  }

  resetQuestionForm() {
    this.ifAskAQuestion = false;
    this.questionEntered = '';
  }
}
