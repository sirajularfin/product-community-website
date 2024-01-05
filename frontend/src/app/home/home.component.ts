import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	activeUser: string = ``;
	navbarShade = `navbar-dark`;
	navbarColor = `bg-transparent`;

	constructor(private activatedRoute: ActivatedRoute) { }

	ngOnInit(): void {
		if (this.activatedRoute.snapshot.params[`id`] != undefined) {
			this.activeUser = this.activatedRoute.snapshot.params[`id`];
		}
	}
}
