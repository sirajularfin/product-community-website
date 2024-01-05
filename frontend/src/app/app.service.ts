import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AppService {

	constructor(private httpClient: HttpClient) { }

	getRequest(url: string): Observable<any> {
		return this.httpClient.get<any>(url);
	}

	getRequestById(url: string, item: any): Observable<any> {
		return this.httpClient.get<any>(`${url}/${item}`);
	}

	postRequest(url: string, data: any): Observable<any> {
		return this.httpClient.post<any>(url, data);
	}

	updateRequest(url: string, data: any): Observable<any> {
		return this.httpClient.put<any>(url, data);
	}

	deleteRequest(url: string, item: any): Observable<any> {
		return this.httpClient.delete<any>(`${url}/${item}`);
	}

}
