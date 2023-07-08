import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule,FormGroup} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule ,MatDialogRef,MatDialogConfig,MatDialog} from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { Token } from '@angular/compiler';
import { LoginDto } from '../types/LoginDto';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  constructor(private authService:AuthenticationService 
    ,private http: HttpClient, 
    public dialog: MatDialog, 
    public dialogRef: MatDialogRef<SignInComponent>,
    private router:Router
    ){

}

hide = true;


signInForm = new FormGroup({
  emailControl: new FormControl('', [Validators.required, Validators.email]),

  // usernameControl: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_]*$'), Validators.minLength(3), Validators.maxLength(20)]),

  passwordControl : new FormControl('', [Validators.required, Validators.maxLength(64),Validators.minLength(8)] )

});

// handleSubmit(e:Event){
//   e.preventDefault();
//   var credentials=new LoginDto();
//   credentials.email=this.signInForm.controls.emailControl.value??'';
//   credentials.password=this.signInForm.controls.passwordControl.value??'';
  
// }
getPasswordErrorMessage(){
  if (this.signInForm.get('passwordControl')?.hasError('required')){
    return 'Password is required';
  }
  if ((this.signInForm.get('passwordControl')?.hasError('minlength')) ||
   (this.signInForm.get('passwordControl')?.hasError('maxlength'))) {
    return 'password length [8 ~ 64] ';
  }


  const errorMessage = '';
  console.log('getPasswordErrorMessage:', errorMessage);
  return errorMessage; }

 getErrorMessage() {
  if (this.signInForm.get('emailControl')?.hasError('required')) {
    return 'You must enter a value';
  }
  const errorMessage = this.signInForm.get('emailControl')?.hasError('email') ? 'Not a valid email' : '';
  console.log('getErrorMessage:', errorMessage);
  return errorMessage;

  // return  this.signInForm.get('emailControl')?.hasError('email') ? 'Not a valid email' : '';


}

// getUsernameErrorMessage() {
//   if (this.signInForm.get('usernameControl')?.hasError('required')) {
//     return 'Username is required';
//   }
//   if (this.signInForm.get('usernameControl')?.hasError('pattern')) {
//     return 'Username can only contain alphanumeric characters and underscores';
//   }
//   if (this.signInForm.get('usernameControl')?.hasError('minlength')) {
//     return 'Username must be at least 3 characters long';
//   }
//   if (this.signInForm.get('usernameControl')?.hasError('maxlength')) {
//     return 'Username cannot be more than 20 characters long';
//   }
//   return '';
// }



submitSignInForm(e:Event) {
 e.preventDefault();
 var credentials=new LoginDto();
 credentials.email=this.signInForm.controls.emailControl.value??'';
 credentials.password=this.signInForm.controls.passwordControl.value??'';

 this.authService.Login(credentials).subscribe((tokenDto)=>{
  console.log(tokenDto);
  this.router.navigateByUrl('/');
 })
}


openSignUpDialog(): void {
  this.dialogRef.close();
  const dialogRef = this.dialog.open(SignUpComponent,{
    width:'744px'
  });
}
  }


