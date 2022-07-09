import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public contactForm: FormGroup;
  disabledSubmitButton: boolean = true;
  passwordShow:boolean = false

  constructor(private fb: FormBuilder) {
    this.contactForm = fb.group({
      'contactFormName': ['', Validators.required],
      'contactFormPassword': ['', Validators.compose([Validators.required, Validators.email])],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("this.contactForm",this.contactForm.value);
    
  }

  handlePassShow() {
    this.passwordShow = !this.passwordShow 
  }

}
