import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm=this.fb.group({
    name:['',[Validators.required,Validators.minLength(4),Validators.pattern('[a-zA-Z]*')]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],

  })

  constructor(private router:Router,private dataservice:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  login(){
    if(this.loginForm.valid){
      var name=this.loginForm.value.name;
      var pswd=this.loginForm.value.pswd;
      this.dataservice.login(name,pswd)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message);
          localStorage.setItem("name",result.name);
         

          this.router.navigateByUrl("dashboard");
        }
        
      },
      (result)=>{
        alert(result.error.message);
      })
      }

    
  else{
    alert("invalid form");
  }
}
  
}
