import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, map } from 'rxjs';
import { AppService } from '../app.service';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

	url: string = `http://localhost:9090/register`;
	alert: boolean = false;
	alertMsg: string = ``;
	alertType: string = ``;
	alertIcon: string = ``;

	reset() {
		this.alert = false;
	}

	constructor(private router: Router, private service: AppService) { }

	inputReader = new FormGroup({
		email: new FormControl(``),
		firstName: new FormControl(``),
		lastName: new FormControl(``),
		paswd: new FormControl(``),
		rePaswd: new FormControl(``)
	})

	ngOnInit(): void { }

	register() {
		if (this.inputReader.value.email == `` || this.inputReader.value.paswd == `` || this.inputReader.value.rePaswd == ``) {
			this.alertMsg = `Required fields cannot be left blank`;
			this.alertType = `alert-danger`;
			this.alertIcon = `warning`;
			this.alert = true;
			return;
		}

		if (this.inputReader.value.paswd != this.inputReader.value.rePaswd) {
			this.alertMsg = `Password mismatch, Please type password properly.`;
			this.alertType = `alert-danger`;
			this.alertIcon = `warning`;
			this.alert = true;
			return;
		}

		this.service.postRequest(this.url, this.inputReader.value).subscribe(() => {
			console.log(`success`);
			this.alertMsg = `Congratulations! Your account has been succefully created`;
			this.alertType = `alert-success`;
			this.alertIcon = `check_circle`;
			this.alert = true;
			setTimeout(() =>
				this.router.navigateByUrl(`login`), 3000
			);
		})
		this.inputReader.reset({});
	}

}
