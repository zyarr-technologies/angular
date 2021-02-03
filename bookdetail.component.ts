import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooklistService } from '../booklist.service';
import { IBook } from '../bookmodel';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {

  eachBook: IBook;
  booklist: IBook[];
  constructor(private bkService: BooklistService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   // this.booklist = this.bkService.get();
    let id: number = +this.activatedRoute.snapshot.paramMap.get("id");
    this.eachBook = this.booklist[id]
  }

}
