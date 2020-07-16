import { Answer } from './answer';

export class Question {
    public content: string;
    public date: string;
    public time: string;
    public moduleCode: string;
    public answerList: Answer[];
    public _id: string;
    constructor(content: string, date: string,
        time: string, moduleCode: string) { 
            this.content = content;
            this.date = date;
            this.time = time;
            this.moduleCode = moduleCode;
            this.answerList = [];
            this._id = '';
        }
}