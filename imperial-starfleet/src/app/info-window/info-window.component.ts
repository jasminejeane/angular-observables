import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { ActivatedRoute }   from '@angular/router';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-info-window',
  templateUrl: './info-window.component.html',
  styleUrls: ['./info-window.component.css']
})
export class InfoWindowComponent implements OnInit {

	dataBanks;
  searchSubject = new Subject(); //add this property


  constructor(
  	private http: Http,
  	private route: ActivatedRoute
  ) { }

   findTurret(turretNumber){
    this.searchSubject.next(turretNumber); // add this line
	}

  ngOnInit() {
  	this.searchSubject.subscribe( param => {
    this.http.get('http://localhost:3000/api/turret/' + param.id)
    .subscribe(response => this.dataBanks = response.json());  	
  });
  }


}
