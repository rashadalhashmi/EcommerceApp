import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IuserSingUp } from 'src/app/viewmodel/user/IuserSingUp';

@Component({
  selector: 'app-profile-editing',
  templateUrl: './profile-editing.component.html',
  styleUrls: ['./profile-editing.component.scss'],
})
export class ProfileEditingComponent implements OnInit {
  user: IuserSingUp;
  constructor() {
    this.user = {
      firstname: 'rashad',
      lastname: 'hussien',
      email: 'rashad@gamil.com',
      username: 'rashad2021',
      password: '56652222555',
      gender: 0,
      address: 'shoge',
      phone: '01128289672',
      image: '',
      userRole: 'Customer',
    };
  }

  // reactive form for user edite profile
  editeUserForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
  });
  // ngOnInit(): void {
  //   this.profileService.getProfile().subscribe((result) => {
  //     console.log(result);
  //     this.editeUserForm = new FormGroup({
  //       firstname: new FormControl(result['firstname']),
  //       lastname: new FormControl(result['lastname']),
  //       phone: new FormControl(result['phone']),
  //       address: new FormControl(result['address']),
  //     });
  //   });
  // }
  editeUserprofile() {
    // this.profileService
    //   .updateUserprofile(this.editeUserForm.value)
    //   .subscribe((result) => {
    //     console.log(result);
    //   });
  }
  ngOnInit(): void {}
}
