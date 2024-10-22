import { Component, } from '@angular/core';
import { BookAddComponent } from "../book-add/book-add.component";
import { Book } from '../model/book';
import { BookEditComponent } from '../book-edit/book-edit.component';


@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [BookAddComponent,BookEditComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BookListComponent  {
  title = "Liste des nouveaux livres :";
  books = [
    new Book ( 1, "Atomic Habits", "James Clear", 35),
    new Book (2,"The slight edge", "Jeff Olsen",30),
    new Book  (3,"Power of habits","charles duhigg", 25)
  ];
  action = "";

  changeAction(action : string){
    this.action = action;
  }

  selectedBook: Book | null = null; 

  changeActionEdit(action: string, book?: Book) {
    this.action = action;
    if (action === 'Edit' && book) {
      this.selectedBook = book;
    } else {
      this.selectedBook = null;
    }
  }
  addBook(book :Book){
    this.books=[...this.books,book];//copier elements ancien tableau et ajoute le new book dans un nouveau tab
    this.changeAction("");//masquer le formulaire
  }
  editBook(book :Book) {
    this.changeAction("");
   
  }
  deleteBook(book: Book): void {
    if (confirm('Es-tu sûr de vouloir supprimer ce livre ?')) {
      this.books = this.books.filter(b => b.id !== book.id);
      console.log(book.id);
    }
  }
  }


