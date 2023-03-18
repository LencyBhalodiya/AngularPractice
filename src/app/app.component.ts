import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private fb: FormBuilder){}
  genders = ['male', 'female'];
  signupForm:FormGroup;

  // can also use this method for reactive appraoch rather than creating new formgroup
  // profileForm = this.fb.group({ 
  //   firstName: [''],
  //   lastName: [''],
  //   address: this.fb.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: ['']
  //   }),
  // });

  ngOnInit(){
    this.signupForm = new FormGroup({ // to create group of specific form field
      'userData': new FormGroup({
        'username': new FormControl(null,Validators.required),
        'email': new FormControl(null,[Validators.required ,Validators.email]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    })
  }
  onAddHobby(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control)
  }
  get controls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }
  onSubmit(){
    console.log(this.signupForm);
  }
}
