import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('', [Validators.pattern(''), Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')])
    })
  }

  get rf() { return this.registrationForm.controls; }   

  register() {
   // console.log(this.registrationForm.value);
    
  }

}
