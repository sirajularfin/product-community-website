import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class AdminHomeComponent implements OnInit {

	constructor(private service: AppService, private router: Router) { }
	url: string = `http://localhost:9090/admin`;
	user: any;

	ngOnInit(): void {
		this.service.getRequestById(this.url, 'admin').subscribe((result) => {
			this.user = result;
		})
	}

	logout() {
		this.user.loginStatus = false;
		this.service.updateRequest(this.url, this.user).subscribe(() => {
			this.router.navigateByUrl(`admin`);
		})
	}

}
