import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin:boolean;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth=>{
      if(auth){
        this.isLogin=true;
      }else{
        this.isLogin=false;
      }
    })
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['./']);
  }
}
