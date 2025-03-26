import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Alert } from '../../utils/alerts/alertas';
import { DateHour } from '../../utils/date-hour/date-hour';
import { LoginService } from '../../service/login.service';
import { NgIf } from '@angular/common';
import { SpinnerComponent } from "../spinner/spinner.component";

@Component({
  selector: 'app-sign-in',
  imports: [RouterLink, ReactiveFormsModule, NgIf, SpinnerComponent],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit{
  formControl: FormGroup;
  loading:boolean = false;
  constructor(private _fb: FormBuilder, private _loginService:LoginService, private _router: Router ){
    this.formControl = this._fb.group({
      user_name: ['', Validators.required],
      user_password: ['', Validators.required],
      repeat_user_password: ['', Validators.required],
    })
  }
  ngOnInit(): void {

  }

  createUser() {
    const user_name= this.formControl.get("user_name")?.value;
    const user_password = this.formControl.get("user_password")?.value;
    const passwordRepeat = this.formControl.get("repeat_user_password")?.value;

    if(!this.formControl.valid){
      Alert.emtyFieldsAlert()
      return;
    }
    if(user_password === passwordRepeat){

      const fullData = {
        user_name,
        user_password,
        dateCreated: DateHour.fechaOrdenBarra()
      }

      this._loginService.postCreateUser(fullData).subscribe((data:any)=> {
        if(data.status === 'false'){
          Alert.errorAlert(data.message);
          return;
        }
        if(data.status === 'true') {
          this.loading = true;
          setTimeout(()=> {
            Alert.succesAlert(data.message);
            this._router.navigate(['/login']);
          }, 3000)
        }
      }, (error)=> {
        Alert.systemErrorAlert();
      });

    }else{
      Alert.errorAlert("Passwords must be the same")
    }

  }
}
