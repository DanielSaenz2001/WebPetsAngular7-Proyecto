import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,private router: Router) { }
  public email:string;
  public password:string;

  ngOnInit() {
  }

  onClickGoogleLogin(){
    this.authService.loginGoogle()
    .then((res) => {
      this.router.navigate(['/admin']);
    }).catch( err => console.log(err.message));
  }

  onSubmitLogin(){
    console.log(this.email);
    this.authService.loginEmail(this.email, this.password)
    .then((res)=>{
      this.router.navigate(['/admin']);
    }).catch((err)=>{
      this.router.navigate(['./']);
    })
  }
}
