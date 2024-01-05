import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	list: any;
	constructor(private service: AppService) { }

	ngOnInit(): void {
		let url: string = `http://localhost:9090/users`;

		this.service.getRequest(url).subscribe(result => {
			this.list = result;
		})
	}

	delete(id: number) {
		let url: string = `http://localhost:9090/users`;

		this.service.deleteRequest(url, id).subscribe(() => { });
	}

}
