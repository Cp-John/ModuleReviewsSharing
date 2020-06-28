export class AverageRatings {
    constructor(public averageGeneral: string,
        public averageDifficulty: string,
        public averageWorkload: string,
        public averageRecommend: string,) {}

    static emptyAverageRatings = new AverageRatings('0', '0', '0', '0');
}