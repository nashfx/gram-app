import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AppService {
	public url: string = "http://localhost:3300";

	constructor(private http: HttpClient) {}

    getPictures(){
  		return this.http.get(this.url);
  	}

  	getUser(){
  		return this.http.get(this.url + "/user");
  	}

}