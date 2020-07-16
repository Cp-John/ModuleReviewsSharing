export class Answer {
    public content: string;
    public date: string;
    public time: string;
    public questionId: string;
    public _id: string
    constructor(
        content: string,
        date: string,
        time: string,
        questionId: string,
    ) { 
        this.content = content;
        this.date = date;
        this.time = time;
        this.questionId = questionId;
        this._id = '';
    }
}