import { Injectable } from "@angular/core";
import { Http } from '@angular/http';


@Injectable()
export class SearchService{

constructor(private http: Http){}

createAPIObservable(turretNumber){
return this.http.get('http://localhost:3000/api/turret/' + turretNumber)
}

}