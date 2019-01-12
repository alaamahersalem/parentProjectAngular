import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AlertsService } from 'angular-alert-module';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
 styleUrls: [ './users.component.css' ]
})
export class UsersComponent implements OnInit {
	constructor(private usersService: UserService,private alerts: AlertsService) {}
	users = [];
	ngOnInit() {
		this.usersService.getUsers().subscribe((data) => {
			this.users = data.data;
		});
	}
	deleteUser(id) {
		this.usersService.deleteUser(id).subscribe(
			(data) => {
				var index = this.users.map(x => {
					return x.id;
				  }).indexOf(id);
				  this.users.splice(index, 1);
			},
			(err) => {console.log(err)})
	}
	editUser(id){
		 this.users.map(x => {
			x.id==id ? x.editMode = true: x.editMode = false;
		  })
	}
	onJobchChange(value : string ,id: string){
		this.users.map(x => {
			(x.id==id) ?  x.job= value : null;
		  })
	}
	updateUser(id){
		var UpdatedObj;
		this.users.map(x => {
			(x.id==id) ?  UpdatedObj={ name : x.first_name , job : x.job} : null;
		  })

		this.usersService.updateUser(UpdatedObj,id).subscribe((data)=>{
			this.users.map(x => {
				if(x.id==id) {
					x.editMode = false ; 
					this.alerts.setMessage('The user is edited successfully!','success');
				}  
			  })
		 },(err) => {console.log(err)})
	}
}
