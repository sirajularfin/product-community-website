import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ResultComponent } from './result/result.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PostReviewComponent } from './post-review/post-review.component';
import { AskReviewComponent } from './ask-review/ask-review.component';
import { AdminHomeComponent } from './admin/home/home.component';
import { AdminLoginComponent } from './admin/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReviewComponent } from './admin/review/review.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin/admin.guard';
import { ProductComponent } from './admin/product/product.component';
import { UserComponent } from './admin/user/user.component';


const routes: Routes = [
	{ path: `register`, component: RegistrationComponent, title: `Register an account - Product Community Website` },
	{ path: `login`, component: LoginComponent, title: `Login - Product Community Website` },

	{
		path: `admin`, children: [
			{ path: ``, component: AdminLoginComponent, title: `Admin - Login` },
			{
				path: `dashboard`, canActivate: [AdminGuard], component: AdminHomeComponent, title: `Admin - Dashboard`, children: [
					{ path: `reviews`, component: ReviewComponent },
					{ path: `products`, component: ProductComponent },
					{ path: `users`, component: UserComponent }
				]
			},

		]
	},

	{ path: `home`, component: HomeComponent, title: `Home - Product Community Website` },

	{
		path: `home/:id`, canActivate: [AuthGuard], children: [
			{ path: ``, component: HomeComponent, title: `Dashboard - Product Community Website` },
			{
				path: `search/:item`, children: [
					{ path: ``, component: ResultComponent, title: `Search Result - Product Community Website` },
					{
						path: `:pid`, children: [
							{ path: ``, component: ProductDetailsComponent, title: `Product Details - Product Community Website` },
							{ path: `post-review`, component: PostReviewComponent, title: `Post a Review - Product Community Website` },
						]
					},
				]
			},
			{ path: `ask-review`, component: AskReviewComponent, title: `Ask for Reviews - Product Community Website` },
		]
	},
	{ path: ``, redirectTo: `home`, pathMatch: `full` },
	{ path: `**`, component: PageNotFoundComponent, title: `Error 404: Page not found` }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
