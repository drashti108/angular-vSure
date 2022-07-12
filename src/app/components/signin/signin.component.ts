import { Component, OnInit, HostListener } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public contactForm: UntypedFormGroup;
  disabledSubmitButton: boolean = true;
  passwordShow:boolean = false

  constructor(private fb: UntypedFormBuilder) {
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
