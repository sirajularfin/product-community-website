import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../app.service';

@Component({
	selector: 'app-product-details',
	templateUrl: './product-details.component.html',
	styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

	alert: boolean = false;
	alertMsg: string = ``;
	activeUser: string = ``;
	searchText: string = ``;
	productId: string = ``;
	navbarShade = `navbar-dark`;
	navbarColor = `bg-dark`;
	isDisabled: boolean = false;

	list: any = [];

	constructor(private activatedRoute: ActivatedRoute, private service: AppService) { }

	ngOnInit(): void {
		let url: string = `http://localhost:9090/reviews`;
		this.searchText = this.activatedRoute.snapshot.params[`item`];
		this.activeUser = this.activatedRoute.snapshot.params[`id`];
		this.productId = this.activatedRoute.snapshot.params[`pid`];

		this.service.getRequestById(url, this.productId).subscribe(result => {
			url = `http://localhost:9090/users`;
			for (let item of result) {
				this.service.getRequestById(url, item[`reviewedBy`]).subscribe(result => {
					item[`username`] = result[`firstName`] + ` ` + result[`lastName`];
					if (this.activeUser == item[`reviewedBy`])
						this.isDisabled = true;
				})
			}

			this.list = result;
		})
	}
}