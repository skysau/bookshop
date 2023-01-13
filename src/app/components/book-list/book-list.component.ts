import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
books:any=[];
  constructor(private CurdService:CrudService) { }

  ngOnInit(): void {
    this.CurdService.GetAllBooks().subscribe(res=>{
      this.books=res;
      console.log(res)
    })
  }
  onDelete(id:any,i:any){
    console.log(i)
    if(window.confirm('Are you sure to want Delete')){
      this.CurdService.DeleteBook(id).subscribe(res=>{
        this.books.splice(i,1)
      })
    }
  }

}
