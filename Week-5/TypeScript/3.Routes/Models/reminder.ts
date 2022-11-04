export default class Reminder{
    id:number;
    isComplete:boolean;
    constructor(public title:string){
        //set id,complete
        this.id=Date.now();
        this.isComplete=false;
    }
}