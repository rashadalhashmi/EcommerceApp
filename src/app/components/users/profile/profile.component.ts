import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user/user-auth.service';
import { IuserSingUp } from 'src/app/viewmodel/user/IuserSingUp';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  user: IuserSingUp ;

  constructor(private userAuthservice:UserAuthService){

    this.user= {} as IuserSingUp;

    // {

    //     firstname: "rashad",
    //     lastname: "hussien",
    //     email: "rashad@gamil.com",
    //     username: "rashad2021",
    //     gender: 0,
    //     address: "shoge",
    //     phone: "01128289672",

    // } ;
 }

 ngOnInit(): void {

    let token= localStorage.getItem("Token")
    if(token!=null) {
     this.userAuthservice.getUserData(token)
    }
    this.userAuthservice.userData$.subscribe(response=>{
        this.user=response;
    })
}
}
