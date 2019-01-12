import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {
	constructor(private loginService: UserService, public router: Router) {}
	public title = 'parents';
	public email = '';
	public password = '';
	
	ngOnInit() {}
	login() {
		this.loginService.userLogin(this.email, this.password).subscribe((data) => {
			 data.token ? this.router.navigateByUrl('/users') : null;
		});
	}
}
