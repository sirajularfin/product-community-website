import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class AdminLoginComponent implements OnInit {

	constructor(private router: Router, private service: AppService) { }

	ngOnInit(): void {
	}

	alert: boolean = false;
	alertMsg: string = ``;

	inputReader = new FormGroup({
		username: new FormControl(``),
		password: new FormControl(``),
	})

	checkCredentials() {
		let url: string = `http://localhost:9090/admin`;
		if (this.inputReader.value.username == `` || this.inputReader.value.password == ``) {
			this.alertMsg = `Required fields cannot be left blank`;
			this.alert = true;
			return;
		}

		this.service.postRequest(url, this.inputReader.value).subscribe(
			data => {
				this.router.navigateByUrl(`admin/dashboard`);
			},
			error => {
				this.alertMsg = `Please enter a valid email and password`;
				this.alert = true;
			})
	}

	reset() {
		this.alert = false;
	}

}
