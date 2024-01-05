import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
	selector: 'app-post-review',
	templateUrl: './post-review.component.html',
	styleUrls: ['./post-review.component.css']
})

export class PostReviewComponent implements OnInit {

	constructor(private activatedRoute: ActivatedRoute, private service: AppService, private router: Router) { }

	url: string = `http://localhost:9090/reviews`;
	alert: boolean = false;
	alertMsg: string = ``;
	navbarShade = `navbar-dark`;
	navbarColor = `bg-dark`;
	activeUser: string = this.activatedRoute.snapshot.params[`id`];
	searchText: string = this.activatedRoute.snapshot.params[`item`];
	productId: string = this.activatedRoute.snapshot.params[`pid`];

	ngOnInit(): void {
	}

	inputReader = new FormGroup({
		subject: new FormControl(``),
		body: new FormControl(``),
		rating: new FormControl(``),
		productId: new FormControl(this.productId),
		reviewedBy: new FormControl(this.activeUser)
	})

	onClick() {
		this.service.postRequest(this.url, this.inputReader.value).subscribe((response) => {
			console.log(response);
		})

		this.router.navigateByUrl(`home/${this.activeUser}/search/${this.searchText}/${this.productId}`);

	}
}
