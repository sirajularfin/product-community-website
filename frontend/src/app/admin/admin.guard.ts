import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AppService } from '../app.service';

@Injectable({
	providedIn: 'root'
})
export class AdminGuard implements CanActivate {
	constructor(private service: AppService, private router: Router) { }

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		let url: string = `http://localhost:9090/admin`;

		var status = new Subject<boolean>();
		this.service.getRequestById(url, "admin").subscribe(result => {
			let flag: any;
			flag = (result["loginStatus"]) ? true : this.router.navigateByUrl(`admin`);
			status.next(flag);
		});
		return status.asObservable();
	}
}




