import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
	selector: 'app-review',
	templateUrl: './review.component.html',
	styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

	list: any;
	constructor(private service: AppService, private router: Router) { }

	ngOnInit(): void {
		let url: string = `http://localhost:9090/reviews`;

		this.service.getRequest(url).subscribe(result => {

			url = `http://localhost:9090/product`;
			for (let item of result) {
				this.service.getRequestById(url, item[`productId`]).subscribe(result => {
					item[`product`] = result[`name`];
				})
			}

			url = `http://localhost:9090/users`;
			for (let item of result) {
				this.service.getRequestById(url, item[`reviewedBy`]).subscribe(result => {
					item[`username`] = result[`firstName`] + ` ` + result[`lastName`];
				})
			}

			this.list = result;
		})
	}

	approve(id: number) {
		let url: string = `http://localhost:9090/reviews`;
		for (let item of this.list) {
			if (id == item[`id`]) {
				item[`isApproved`] = true;
				this.service.postRequest(url, item).subscribe(() => { })
			}
		}
		this.ngOnInit();
	}

	reject(id: number) {
		let url: string = `http://localhost:9090/reviews`;
		this.service.deleteRequest(url, id).subscribe(() => { })
		this.ngOnInit();
	}

}
