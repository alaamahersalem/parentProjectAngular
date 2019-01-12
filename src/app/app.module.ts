import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsersComponent } from './views/users/users.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CreateUserComponent } from './views/create-user/create-user.component';
import { LoginComponent } from './views/login/login.component';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './views/user-details/user-details.component';
import { AlertsModule } from 'angular-alert-module';

@NgModule({
	declarations: [ AppComponent, UsersComponent, CreateUserComponent, LoginComponent, UserDetailsComponent ],
	imports: [ BrowserModule, HttpClientModule, RouterModule, AppRoutingModule, FormsModule, AlertsModule.forRoot() ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
