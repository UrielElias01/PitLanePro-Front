import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { RecaptchaModule } from 'ng-recaptcha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule,provideHttpClient, withFetch , HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenComponent } from './components/token/token.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { CardsPilotosComponent } from './components/cards-pilotos/cards-pilotos.component';
import { HorarioComponent } from './components/horario/horario.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PoliPrivComponent } from './components/poli-priv/poli-priv.component';
import { ForgotPassComponent } from './components/forgot-pass/forgot-pass.component'; 
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { Token2Component } from './components/token2/token2.component';
import { TestComponent } from './components/test/test.component';
import { CreateCompetitionComponent } from './admin-competitions/create-competition/create-competition.component';
 

@NgModule({ 
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    SpinnerComponent,
    TokenComponent,
    HomeComponent,
    CardsPilotosComponent,
    HorarioComponent,
    InicioComponent,
    PoliPrivComponent,
    ForgotPassComponent,
    ResetPasswordComponent,
    Token2Component,
    TestComponent,
    CreateCompetitionComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RecaptchaModule,
    RouterModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 3000, // tiempo de espera en milisegundos (4 segundos)
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), // ToastrModule added
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
