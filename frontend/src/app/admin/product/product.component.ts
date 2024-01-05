import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

	list: any;
	deleteItem: any;

	inputReader = new FormGroup({
		id: new FormControl(``),
		name: new FormControl(``),
		code: new FormControl(``),
		brand: new FormControl(``),
		price: new FormControl(``),
		image_url: new FormControl(``)
	})
	constructor(private service: AppService) { }

	ngOnInit(): void {
		let url: string = `http://localhost:9090/product`;

		this.service.getRequest(url).subscribe(result => {
			url = `http://localhost:9090/count`;
			for (let item of result) {
				this.service.getRequestById(url, item[`id`]).subscribe(result => {
					item[`avgRating`] = (result)[0][1].toFixed(1);
					item[`totalReviews`] = (result)[0][0];
				})
			}
			this.list = result;
		})
	}

	onSubmit() {
		if (!this.inputReader.touched) {
			return;
		}
		let url: string = `http://localhost:9090/product`;
		this.service.postRequest(url, this.inputReader.value).subscribe(result => {
			console.log(result);
		})
	}

	delete() {
		let url: string = `http://localhost:9090/product`;
		this.service.deleteRequest(url, this.deleteItem).subscribe(() => { });
	}

	edit(id: number) {
		let url: string = `http://localhost:9090/product`;
		this.service.getRequestById(url, id).subscribe(result => {
			this.inputReader = new FormGroup({
				id: new FormControl(result[`id`]),
				name: new FormControl(result[`name`]),
				code: new FormControl(result[`code`]),
				brand: new FormControl(result[`brand`]),
				price: new FormControl(result[`price`]),
				image_url: new FormControl(result[`image_url`])
			})
		})
	}

	reset() {
		this.inputReader.reset({});
	}
}
