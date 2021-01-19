import { Component } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { StoreEmailService } from "./service/store-email.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public storeservice:StoreEmailService) {}
  
  message: string | undefined;
  emailid: any;

  title = 'Sportfolio - We Put Sport at the forefront of your career path.';

  //form object creation
  userEmail = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
  });

  // on form submit
  async formSubmit() {
    console.log(this.userEmail.value);
    if (this.userEmail.invalid) {
      console.log("invalid");
      this.message = "Please Enter Valid Email Address"
    }
    else {
      this.storeservice.store_email(this.userEmail.value).then(res => {
        console.log(res);
        this.emailid = '';
        this.message = "Thank You!!, Your Email Has Been Successfully Registered"
      }).catch(error => {
        console.log(error);
      });
    }

  }
}
