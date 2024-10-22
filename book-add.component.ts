import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { last } from 'rxjs';
import { Book } from '../model/book';
@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookAddComponent {
  @Input() lastId = 0;
  @Output() bookCreated =new EventEmitter<Book>();
  addBook(title : string, author : string, price : number){
    const newBook = new Book(
      //id : Math.ceil(Math.random() * 1000),
       this.lastId + 1,
      title,
      author,
      price
    );
    this.bookCreated.emit(newBook);
    console.log(newBook)
  }
}
