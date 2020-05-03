import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/login.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
 
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private login:LoginService, private router:Router) { }

  loginText : string = "LOGIN"
  navItemList = [
    {
      name : 'Dashboard',
      route : '/dashboard',
      isSelected : true
    },
    {
      name : 'Latest News',
      route : '/latestnews',
      isSelected : false
    },
    {
      name : 'Precaution',
      route : 'precautions',
      isSelected : false
    }
  ]
  ngOnInit(): void {
    if(localStorage.getItem('cred') != null){
      this.login.loginState = "LOGIN";
      this.login.loginStateEmitter.emit("LOGIN");
      this.loginText = "LOGOUT";
    }

  this.login.loginStateEmitter.subscribe((state) => {
    if(state === "LOGIN"){
      this.loginText = "LOGOUT"
    }else{
      this.loginText = "LOGIN"
    }
  });
  }

  click(){
    if(this.loginText === "LOGIN"){
      this.router.navigateByUrl('/login');
    }
    else{
      this.login.logout();
    }
  }
}
