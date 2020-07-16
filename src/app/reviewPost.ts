import { ModuleInfo } from './moduleInfo';
import { ReviewAndRatings } from './reviewAndRatings';
import { ExtraInfo } from './extraInfo';

export class ReviewPost {
    public moduleInfo: ModuleInfo;
    public reviewAndRatings: ReviewAndRatings;
    public extraInfo: ExtraInfo;
    public headerImage: string;
    public date: string;
    public time: string;
    public numOfLikes: number;
    public numOfDislikes: number;
    public numOfShares: number;
    public _id: string;
    constructor(
        moduleInfo: ModuleInfo,
        reviewAndRatings: ReviewAndRatings,
        extraInfo: ExtraInfo,
        headerImage: string,
        date: string,
        time: string) { 
            this.moduleInfo = moduleInfo;
            this.reviewAndRatings = reviewAndRatings;
            this.extraInfo = extraInfo;
            this.headerImage = headerImage;
            this.date = date;
            this.time = time;
            this.numOfDislikes = 0;
            this.numOfLikes = 0;
            this.numOfShares = 0;
            this._id = '';
        }
}