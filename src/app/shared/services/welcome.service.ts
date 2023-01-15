import { HttpClient, HttpParams, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListTexts } from "../../shared/models/ListTexts.model";



@Injectable({
    providedIn: 'root'
})
export class WelcomeService {

    constructor(
        private http: HttpClient
    ) { }

    getTexts(): Observable<ListTexts[]> {

        const httpOptions =
        {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            rejectUnauthorized: false
        };
       const url = "assets/data/texts.json";

        return this.http.get<ListTexts[]>(url, httpOptions);
    }

   
}