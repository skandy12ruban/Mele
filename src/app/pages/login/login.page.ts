import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss', '../signup/signup.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private _alertCtrl: AlertController
  ) {}

  ngOnInit() {}

  login(email: any, password: any) {
    this.authService
      .SignIn(email.value, password.value)
      .then(async (res): Promise<any> => {
        console.log(res);
        if (res?.user?.emailVerified) {
          this.router.navigate(['home']);
        } else {
          let alert = await this._alertCtrl.create({
            header: 'Email Verification Required!',
            subHeader: 'Complete your registration',
            message: `To access your account, please verify your email by clicking the link we sent to your inbox`
          })
          await alert.present();
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  loginWithGoogle(){
    this.authService.GoogleAuth()
  }

  goToSignup(){
    this.router.navigateByUrl('/signup')
  }

}
