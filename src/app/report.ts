export class Report {
    public content: string;
    public date: string;
    public time: string;
    public postId: string;
    public _id: string;
    constructor(content: string, date: string, time: string, postId: string) {
        this.content = content;
        this.date = date;
        this.time = time;
        this.postId = postId;
        this._id = '';
    }
}