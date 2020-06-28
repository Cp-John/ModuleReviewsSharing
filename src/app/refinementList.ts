export class RefinementList {
    static emptyRefinementList = new RefinementList([], [], [], []);
    constructor(public Faculty: string[], 
        public Department: string[], 
        public ModuleCredit: string[], 
        public Level: string[]) {}
    
    isEmpty() {
        return this.Faculty.length == 0 
            && this.Department.length == 0 
            && this.ModuleCredit.length == 0 
            && this.Level.length == 0;
    }
}