import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Alert } from '../../utils/alerts/alertas';
import { LoginService } from '../../service/login.service';
import { SpinnerComponent } from "../spinner/spinner.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [RouterLink, SpinnerComponent, NgIf, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  formControl: FormGroup;
  loading: boolean = false;
  constructor(private _fb: FormBuilder, private _loginService: LoginService, private _router: Router){
      this.formControl = this._fb.group({
        user_name: ['', Validators.required],
        user_password: ['', Validators.required]
      })
  }

  ngOnInit(): void {

  }
  loginUser() {
    if(this.formControl.valid){
      const fullData = this.formControl.value;
      this._loginService.postlogin(fullData).subscribe((data:any)=> {
        if(data.status === 'false'){
        Alert.errorAlert(data.message);
          return;
        }
        if(data.status === 'true'){
          localStorage.setItem('token', data.token)
          console.log("Mi token 🫢", data.token)
          if(!data.token) {
            Alert.succesAlert("Access denied");
            return;
          }
          /* this.loading = true; */
          this._router.navigate(['/products'])
          /* setTimeout(()=> {
            Alert.succesAlert(data.message);
            this._router.navigate(['/products']);
          }, 3000); */
        }
      }, (error)=> {
        Alert.systemErrorAlert();
      });
    }else {
        Alert.emtyFieldsAlert();
    }
  }
}
