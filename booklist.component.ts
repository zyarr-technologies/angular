import { Component, OnInit } from '@angular/core';
import { BooklistService } from '../booklist.service';
import { IBook } from '../bookmodel';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  booklist: IBook[];
  tempBookList: any;
  constructor(private booklistService: BooklistService) { }

  ngOnInit(): void {
    this.booklistService.get().subscribe(
      data => {this.tempBookList = data},
      error => console.log(error)
    );
  }

}
