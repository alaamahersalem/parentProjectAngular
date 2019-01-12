import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './views/users/users.component';
import { CreateUserComponent } from './views/create-user/create-user.component';
import { LoginComponent } from './views/login/login.component';
import { UserDetailsComponent } from './views/user-details/user-details.component';

const routes: Routes = [
	{ path: 'users', component: UsersComponent },
	{ path: 'createUser', component: CreateUserComponent },
	{ path: '', component: LoginComponent },
	{ path: 'user/:id', component: UserDetailsComponent }
];

@NgModule({
	declarations: [],
	// imports: [],
	imports: [ CommonModule, RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
