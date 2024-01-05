import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import { ResultNotFoundComponent } from './result-not-found/result-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PostReviewComponent } from './post-review/post-review.component';
import { AskReviewComponent } from './ask-review/ask-review.component';
import { AdminModule } from './admin/admin.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		HeaderComponent,
		FooterComponent,
		RegistrationComponent,
		LoginComponent,
		SearchComponent,
		ResultComponent,
		ResultNotFoundComponent,
		ProductDetailsComponent,
		PostReviewComponent,
		AskReviewComponent,
  PageNotFoundComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule,
		AdminModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
