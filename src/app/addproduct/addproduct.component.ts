import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  addform=this.fb.group({
    name:['',Validators.required],
    price:['',Validators.required],
    qty:['',Validators.required],
    select:['',Validators.required]
  })
  constructor(private router:Router,private fb:FormBuilder,private dataservice:DataService) { }

  ngOnInit(): void {
  }
  add(){
    if(this.addform.valid){
      let name=this.addform.value.name;
      let price=this.addform.value.price;
      let qty=this.addform.value.qty;
      let select=this.addform.value.select;
      console.log(name);
      this.dataservice.add(name,price,qty)
      .subscribe((result:any)=>{
        if(result){
          
          alert(result.message);
         
       
        }
      },
      (result)=>{
        alert(result.error.message);
        
      
      })
     }
     else{
       alert("Invalid form")
     }
}
  
}
