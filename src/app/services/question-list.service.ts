import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Question } from '../Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionListService {

  constructor(public http: HttpClient) { }

  getQuestionListOfModule(moduleCode: string) {
    return this.http.get('/questions/' + moduleCode);
  }

  countNumOfQuestions() {
    return this.http.get('/questions/count');
  }

  addQuestion(question: Question) {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post('/questions', question, httpOptions);
  }
}
