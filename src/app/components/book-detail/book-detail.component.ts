import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
getId:any;
updateForm!:FormGroup;
  constructor(private fb:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private activatedRoute:ActivatedRoute,
    private CurdService:CrudService) { 
      this.getId=this.activatedRoute.snapshot.paramMap.get('id');
      this.CurdService.GetBookById(this.getId).subscribe(res=>{
        this.updateForm.setValue({
          name:res['name'],
          price:res['price'],
          description:res['description']
        })
      });
      this.updateForm=this.fb.group({
      name:[''],
       price:[''],
       description:['']
      });
    }

  ngOnInit(): void {
  }
  onUpdate(){
    console.log(this.getId);
    console.log(this.updateForm.value);
    this.CurdService.UpdateBook(this.getId,this.updateForm.value).subscribe(res=>{
      console.log('updated sucessfully');
      this.ngZone.run(()=>{
        this.router.navigateByUrl('/book-list')
      })
    },(error)=>{
      console.log(error);
    })
  }

}
