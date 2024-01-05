import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

	@Input() activeUser: any;
	totalUsers: any;
	totalOnlineUsers: any;
	totalReviews: any;

	url: string = `http://localhost:9090/stats`;

	constructor(public router: Router, public service: AppService) { }

	ngOnInit(): void {
		this.service.getRequestById(this.url, `posts`).subscribe(result => {
			this.totalReviews = result;
		})

		this.service.getRequestById(this.url, `members`).subscribe(result => {
			this.totalUsers = result;
		})

		this.service.getRequestById(this.url, `online`).subscribe(result => {
			this.totalOnlineUsers = result;
		})
	}

}
