
export class TaskModel{
    title : string;
    desc : string;
    date : Date;

    getTitle(): string{
        return this.title;
    }
    setTitle(title:string){
        this.title = title;
    }
    getDesc() : string{
        return this.desc;
    }

    setDesc(desc:string){
        this.desc = desc;
    }

    getDate():Date{
        return this.date;
    }

    setDate(inDate : Date){
        this.date = inDate;
    }

}