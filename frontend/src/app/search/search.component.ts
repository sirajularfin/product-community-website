import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	@Input() activeUser: any;
	constructor(private router: Router) { }

	ngOnInit(): void {
	}

	inputReader = new FormGroup({
		searchText: new FormControl(``)
	})

	search() {
		this.router.navigateByUrl(`home/${this.activeUser}/search/${this.inputReader.value.searchText}`);
	}
}
