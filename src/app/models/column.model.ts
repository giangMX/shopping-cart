export class Column {
    constructor(public name: string, public tasks: string[] ,public count:number = tasks.length) {}

    public updateCount(){
      this.count = this.tasks.length;
    }
}
