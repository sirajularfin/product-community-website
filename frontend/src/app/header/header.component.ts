import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	@Input() activeUser: any;
	@Input() navbarShade: any;
	@Input() navbarColor: any;
	username: string = ``;
	collection: any;
	url: string = `http://localhost:9090/login`;

	constructor(private service: AppService, public router: Router) { }

	ngOnInit(): void {
		if (this.activeUser) {
			this.service.getRequestById(this.url, this.activeUser).subscribe(result => {
				this.collection = result;
				this.username = this.collection.firstName + ` ` + this.collection.lastName;
			})
		}
	}

	logOut() {
		this.collection.loginStatus = false;
		this.service.updateRequest(this.url, this.collection).subscribe(() => {
			this.router.navigateByUrl(`home`);
		})
	}
}
