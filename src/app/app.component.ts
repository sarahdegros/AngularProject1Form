import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  signupForm: FormGroup;
  genders = ['Female', 'Male', 'Other', 'I prefer not to answer'];
  type: boolean =false;
  typev2: string = "password";
 

  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'ftname' : new FormControl(null, [Validators.required]),
        'ltname' : new FormControl(null, [Validators.required]),
        'email' : new FormControl(null, [Validators.required, , Validators.email]),
        'uname' : new FormControl(null, [Validators.required]),
        'pword' : new FormControl(null, [Validators.required]),
        'gender' : new FormControl(null, [Validators.required]),
        'ftnamelog' : new FormControl(null, [Validators.required])
       }),
    });
    this.signupForm.setValue({
      'userData': {
        'ftname' : 'First Name',
        'ltname' : 'Last Name',
        'email' : 'Example@email.com',
        'uname' : 'Username',
        'pword' : 'Password',
        'gender' : 'I prefer not to answer',
        
      },
    });
  }

  onSubmit(){
    console.log(this.signupForm);
    this.signupForm.reset({
      'userData': {
        'ftname' : 'First Name',
        'ltname' : 'Last Name',
        'email' : 'Example@email.com',
        'uname' : 'Username',
        'pword' : 'Password',
        'gender' : 'I prefer not to answer'
      }
    });
  }  
 
  
  suggestUsername(){
    let text = "SuperUserID";
    let possible = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    for (let i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));



    const suggestedUsername = `${text}`;
    console.log(suggestedUsername);
    this.signupForm.patchValue({
      'userData': {
        'uname' : suggestedUsername,   
    }
    });
  };
    
  
  suggestPassword(){
    let text = "";
    let possible = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    for (let i = 0; i < 6; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

    let text2 = "";
    let possible2 = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    for (let i = 0; i < 6; i++)
    text2 += possible2.charAt(Math.floor(Math.random() * possible2.length));

    let text3 = "";
    let possible3 = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890";
    for (let i = 0; i < 6; i++)
    text3 += possible3.charAt(Math.floor(Math.random() * possible3.length));
    
    const suggestedPassword = `${text}-${text2}}`
    
    this.signupForm.patchValue({
          'userData': {
            'pword' : suggestedPassword ,   
        }
        });
  };
 

  toggletype(){
        this.type = !this.type;
        this.type ? this.typev2 = "text" : this.typev2 = "password"
  }
  
}


