export class Book {
public get price(): number {
    return this._price;
}
public set price(value: number) {
    this._price = value;
}
public get author(): string {
    return this._author;
}
public set author(value: string) {
    this._author = value;
}
public get title(): string {
    return this._title;
}
public set title(value: string) {
    this._title = value;
}
public get id(): number {
    return this._id;
}
public set id(value: number) {
    this._id = value;
}
    //_id
   /* private id : number;
    private _title :string;
    private _author :string;
    private _price : number;

    constructor(id  :number ,title:string ,author:string ,price:number){
        this.id=id;
        this._author=author;
        this._price=price;
        this._title=title;
    }
*/
   //si je double click un attribut une lampe blue apparait qui permet d'affiche get et set
// yasna3 les attributs et les constructeurs ili yimchiw maah 
constructor ( 
    private _id: number, 
    private _title: string ,
    private _author: string ,
    private _price: number
){}

}

