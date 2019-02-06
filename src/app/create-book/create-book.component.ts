import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  useBtn = false;
  createBook: FormGroup;
  books = [];

  constructor(private fb: FormBuilder) {
    setTimeout(() => {
      this.useBtn = true;
    }, 3000);
   }

  ngOnInit() {
    this.createBook = this.fb.group({
      nameOfBook: new FormControl(),
      author: new FormControl(),
      genre: new FormControl(),
      pubYear: new FormControl(),
      rating: new FormControl()
    })
  }

  onCreateBook(): void {
    this.books.push(this.createBook.value)
  }

}
