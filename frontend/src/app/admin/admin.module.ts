import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './home/home.component';
import { AdminLoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReviewComponent } from './review/review.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';


@NgModule({
	declarations: [
		AdminHomeComponent,
		AdminLoginComponent,
		ReviewComponent,
		ProductComponent,
		UserComponent,
	],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		RouterModule,
		FormsModule
	]
})
export class AdminModule { }
