export class Task {
  private completed:boolean;
  private timeSpent:number;
  private dueDate:String;
  private dueTime:String;


  constructor(private title:string, private desc:string){
    this.completed = false;
    this.timeSpent = 0;
  }

  complete(){
    this.completed = true;
  }
}
