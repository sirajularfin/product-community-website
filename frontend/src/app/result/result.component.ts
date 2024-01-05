import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
	selector: 'app-result',
	templateUrl: './result.component.html',
	styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

	alert: boolean = false;
	alertMsg: string = ``;
	activeUser: string = ``;
	searchText: string = ``;
	navbarShade = `navbar-dark`;
	navbarColor = `bg-dark`;
	reviewCount: any;

	list: any = [];
	resultFound: boolean = true;

	constructor(private activatedRoute: ActivatedRoute, private service: AppService) { }

	ngOnInit(): void {
		let url: string = `http://localhost:9090/search`;
		this.searchText = this.activatedRoute.snapshot.params[`item`];
		this.activeUser = this.activatedRoute.snapshot.params[`id`];

		this.service.getRequestById(url, this.searchText).subscribe(result => {
			this.list = result;
			if (this.list.length == 0)
				this.resultFound = false;

			url = `http://localhost:9090/count`;
			for (let item of this.list) {
				this.service.getRequestById(url, item.id).subscribe(result => {
					item[`avgRating`] = (result)[0][1].toFixed(1);
					item[`totalReviews`] = (result)[0][0];
				})
			}
		})
	}

}
