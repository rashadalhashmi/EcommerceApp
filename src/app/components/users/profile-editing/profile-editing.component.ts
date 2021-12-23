import { Component, OnInit } from '@angular/core';
import { IuserSingUp } from 'src/app/viewmodel/user/IuserSingUp';

@Component({
  selector: 'app-profile-editing',
  templateUrl: './profile-editing.component.html',
  styleUrls: ['./profile-editing.component.scss']
})
export class ProfileEditingComponent implements OnInit {
  user: IuserSingUp ;
  constructor() {


    this.user={

      firstname: "rashad",
      lastname: "hussien",
      email: "rashad@gamil.com",
      username: "rashad2021",
      password: "56652222555",
      gender: 0,
      address: "shoge",
      phone: "01128289672",
      image: "",
      userRole: "Customer"

  }
  }

  ngOnInit(): void {
  }

}
