import { ModuleInfo } from './moduleInfo';
import { ReviewAndRatings } from './reviewAndRatings';
import { ExtraInfo } from './extraInfo';

export class ReviewPost {
    public moduleInfo: ModuleInfo;
    public reviewAndRatings: ReviewAndRatings;
    public extraInfo: ExtraInfo;
    public date: string;
    public time: string;
    public id: number;
    public numOfLikes: number;
    public numOfDislikes: number;
    public numOfShares: number;
    constructor(
        moduleInfo: ModuleInfo,
        reviewAndRatings: ReviewAndRatings,
        extraInfo: ExtraInfo,
        date: string,
        time: string,
        id: number) { 
            this.moduleInfo = moduleInfo;
            this.reviewAndRatings = reviewAndRatings;
            this.extraInfo = extraInfo;
            this.date = date;
            this.time = time;
            this.id = id;
            this.numOfDislikes = 0;
            this.numOfLikes = 0;
            this.numOfShares = 0;
        }
}