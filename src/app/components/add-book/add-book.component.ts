import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
bookForm:FormGroup;
  constructor(private fb:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private CurdService:CrudService) { 
     this.bookForm=this.fb.group({
       name:[''],
       price:[''],
       description:['']
     },[Validators.required])
    }

  ngOnInit(): void {
  }
  onSubmit():any{
    console.log(this.bookForm.get('name')?.invalid && this.bookForm.get('name')?.touched)
    this.CurdService.AddBook(this.bookForm.value).subscribe((res:any)=>{
      alert('Bood Added Sucessfully');
      console.log('Bood Added Sucessfully');
      this.ngZone.run(()=>{
        this.router.navigateByUrl('/book-list');
      }),(err:any)=>{
         console.log(err);
      }
    });
  }

}
