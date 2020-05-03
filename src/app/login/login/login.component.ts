import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  constructor(private login: LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if( this.login.login(this.loginForm.value.username,this.loginForm.value.password) === true){
      this.router.navigateByUrl('');
    }
    else{
      alert('Incorrect credentials -> Alert to be changed to toaster');
    }
   
  }

}
