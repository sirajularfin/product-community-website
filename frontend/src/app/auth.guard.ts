import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AppService } from './app.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {

	constructor(private service: AppService, private router: Router) { }

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		const user = route.paramMap.get(`id`);
		let url: string = `http://localhost:9090/users`;

		var status = new Subject<boolean>();
		this.service.getRequestById(url, user).subscribe(result => {
			let flag: any;
			flag = (result["loginStatus"]) ? true : this.router.navigateByUrl(`login`);
			status.next(flag);
		});
		return status.asObservable();
	}
}
