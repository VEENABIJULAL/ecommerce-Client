import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Products=[]
  search:any;
  
  loginForm=this.fb.group({
    search:['',[Validators.required]]
  })

  constructor(private router:Router,private dataservice:DataService,private fb:FormBuilder) {
    this.dataservice.displayProducts()
    .subscribe((result:any)=>{
      if(result){
        this.Products=result.message
      }
     },
     (result)=>{
alert(result.error.message)
     
    })

   }

  ngOnInit(): void {
  }
add(){
  this.router.navigateByUrl("addproduct");
}
Search(){
    console.log(this.search);
    var search=this.search;
    this.dataservice.search(search)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message);
      } 
    },
    (result)=>{
      alert(result.error.message);
    })
}
  
}
