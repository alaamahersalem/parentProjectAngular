import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data,LoginData,UsersList,UserUpdate } from './Data';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	constructor(private http: HttpClient) {}
	private basicUrl: string = 'https://reqres.in';
	private loginUrl: string = `${this.basicUrl}/api/login`;
	private usersListUrl: string = `${this.basicUrl}/api/users`;
	
	userLogin(email, password):Observable<LoginData> {
		return this.http.post<LoginData>(this.loginUrl, {
			email,
			password
		});
	}
	deleteUser(id) {
		var url = `${this.basicUrl}/api/users/${id}`;
		return this.http.delete(url);
	}
	updateUser(UpdatedObj,id):Observable<UserUpdate> {
		var url = `${this.basicUrl}/api/users/${id}`;
		return this.http.put<UserUpdate>(url, UpdatedObj);
	}
	getUsers():Observable<UsersList> {
		return this.http.get<UsersList>(this.usersListUrl);
	}
	userDetails(id):Observable<Data> {
		var url = `${this.basicUrl}/api/users/${id}`;
		return this.http.get<Data>(url);
	}
}
