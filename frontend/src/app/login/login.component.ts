import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	url: string = `http://localhost:9090/login`;
	collection: any;
	alert: boolean = false;
	alertMsg: string = ``;

	inputReader = new FormGroup({
		email: new FormControl(``),
		paswd: new FormControl(``)
	})

	constructor(private router: Router, private service: AppService) { }

	ngOnInit(): void {
	}

	checkCredentials() {
		if (this.inputReader.value.email == `` || this.inputReader.value.paswd == ``) {
			this.alertMsg = `Required fields cannot be left blank`;
			this.alert = true;
			return;
		}

		this.service.postRequest(this.url, this.inputReader.value).subscribe(
			data => {
				this.collection = data;
				this.router.navigateByUrl(`home/${this.collection.id}`);
			},
			error => {
				this.alertMsg = `Please enter a valid email and password`;
				this.alert = true;
			})

		this.inputReader.reset({});
	}

	reset() {
		this.alert = false;
	}
}