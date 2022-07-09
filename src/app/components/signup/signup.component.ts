import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  passwordShow:boolean = false
  confirmPasswordShow:boolean = false

  constructor(private fb: FormBuilder) {
    this.contactForm = fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'mobile': ['', Validators.required],
      'email': ['', Validators.compose([Validators.required, Validators.email])],
      'password': ['', Validators.required],
      'confirmPassword': ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("this.contactForm",this.contactForm.value);
    
  }

  handleConfirmPassShow() {
    this.confirmPasswordShow = !this.confirmPasswordShow
  }

  handlePassShow() {
    this.passwordShow = !this.passwordShow 
  }


}
