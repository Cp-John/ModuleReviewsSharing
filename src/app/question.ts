import { Answer } from './answer';

export class Question {
    public content: string;
    public date: string;
    public time: string;
    public moduleCode: string;
    public id: number;
    public answerList: Answer[];
    constructor(content: string, date: string,
        time: string, moduleCode: string, id: number) { 
            this.content = content;
            this.date = date;
            this.time = time;
            this.moduleCode = moduleCode;
            this.id = id;
            this.answerList = [];
        }
}