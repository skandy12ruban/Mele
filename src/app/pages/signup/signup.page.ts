import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  passwordComplexity: number = 0;

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private _alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  signUp(email: any, password: any) {
    this.authService
      .RegisterUser(email.value, password.value)
      .then((res) => {
        this.authService.SendVerificationMail();
      })
      .catch(async (error) => {
        if (error.message.includes('already in use by another account')) {
          let alert = await this._alertCtrl.create({
            header: 'Heads up!',
            subHeader: 'Email Already Exists',
            message: `We're sorry, but the email address you provided is already registered in our system. Please use a different email address or log in with your existing account.`,
          });
          await alert.present();
        }
      });
  }

  signUpWithGoogle(){
    this.authService.GoogleAuth()
  }

  goToLogin() {
    this.router.navigateByUrl('/login');
  }

  checkPasswordStrong(password: string) {
    this.passwordComplexity = 0;
    // Check if the password meets the length requirement
    let total = 5;
    let score = 0;
    if (password.length > 8) {
      score++;
    }

    // Check if the password contains at least one lowercase letter
    if (/[a-z]/.test(password)) {
      score++;
    }

    // Check if the password contains at least one uppercase letter
    if (/[A-Z]/.test(password)) {
      score++;
    }

    // Check if the password contains at least one digit
    if (/\d/.test(password)) {
      score++;
    }

    // Check if the password contains at least one special character
    if (/[^a-zA-Z0-9]/.test(password)) {
      score++;
    }
    console.log(score, total);
    this.passwordComplexity = Math.floor((score/total) * 100);
  }
}
