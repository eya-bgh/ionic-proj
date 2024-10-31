import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AutheticationService } from 'src/app/authetication.service';

@Component({
  selector: 'app-sinup',
  templateUrl: './sinup.page.html',
  styleUrls: ['./sinup.page.scss'],
})
export class SinupPage implements OnInit {
  regForm: FormGroup ;
  constructor(public fromBuilder:FormBuilder, public loadingCtrl: LoadingController, public authService:AutheticationService) { }

  ngOnInit() {
    this.regForm = this.fromBuilder.group({
      fullname:['',[Validators.required]],
      email: ['',[
        Validators.required, 
        Validators.email,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
     ]],
     password:['',
      Validators.required,
      Validators.pattern("/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,}")
     ]
    })
  }

  get errorControl(){
    return this.regForm?.controls;

  }
  async signUp(){
    const loading =await this.loadingCtrl.create();
    await loading.present();
    if (this.regForm?.valid){
      //const user = await this.authService.registerUser(email,password)
    }
  }
}
