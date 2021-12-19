import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/Profile/profile.service';
import { IuserSingUp } from 'src/app/viewmodel/user/IuserSingUp';

@Component({
  selector: 'app-user-action',
  templateUrl: './user-action.component.html',
  styleUrls: ['./user-action.component.scss'],
})
export class UserActionComponent implements OnInit {
  constructor(private profileService:ProfileService) {
    this.profileService.getProfile().subscribe({
      next: (profile)=>{
        this.user = profile.data.user
        console.log(profile.data.user)
        console.log(this.user)
      }
    })
  }
  user: IuserSingUp = {
    firstname: 'rashad',
    lastname: 'alhashmie',
    email: 'rashaami@gamil.com',
    username: 'rad2kk021',
    password: 'djf125522445',
    gender: 0,
    address: 'cairo,nasercity',
    phone: '01128289672',
    image: 'llf/dff',
    userRole: 'Customer',
  };
  ngOnInit(): void {}
}
