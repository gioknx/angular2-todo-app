export class Task {
  private completed:boolean;
  private timeSpent:number;
  private dueTime:String;
  private dueTo: Object;
  private finishedAt: Object;




  private dueDate:String;
  /*set dueDate(value: String){
    let [year, month, day] = value.split("-");
    let month_int = parseInt(month) - 1
    month = month_int < 10 ? "0" + String(month_int): String(month_int);

    this._dueDate = month + "-" + day + "-" + year;
  }*/


  setDueTo(){
    if(this.dueDate){
      if(this.dueTime)
        this.dueTo = new Date(String(this.dueDate) + " " + String(this.dueTime));
      else
        this.dueTo = new Date(String(this.dueDate) + " 00:00:00");
    }
  }


  constructor(private title:string, private desc:string){
    this.completed = false;
    this.timeSpent = 0;
  }

  complete(){
    this.completed = true;
    this.finishedAt = new Date();
  }
}
