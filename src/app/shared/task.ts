export class Task {
  private completed:boolean;
  private timeSpent:number;
  private dueDate:String;
  private dueTime:String;


  constructor(private title:string, private desc:string){
    this.completed = false;
    this.timeSpent = 0;
    this.dueDate = "00/000/0000";
    this.dueTime = "00:00"

  }

  complete(){
    this.completed = true;
  }
}
