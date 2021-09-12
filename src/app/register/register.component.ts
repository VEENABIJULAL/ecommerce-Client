import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private dataservice:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  registerForm=this.fb.group({
    userName:['',Validators.required],
    password:['',Validators.required]
   })
  signUp(){
    if(this.registerForm.valid){
    let userName=this.registerForm.value.userName;
    let password=this.registerForm.value.password;
    this.dataservice.signUp(userName,password)
   .subscribe((result:any)=>{
     if(result){
       alert(result.message)
       this.router.navigateByUrl('')
     }
   },
   (result)=>{
   alert(result.error.message)
   
   })
  }
    else
    {
      alert("Invalid form")
    }
  
  }
  
}
