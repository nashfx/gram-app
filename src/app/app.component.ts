import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'gram-app';
  	photo: any = [];
 	user: any;
	pics: any;

	constructor(
  		private appService: AppService
  	){}


	ngOnInit(){
		this.photo = [
		    {cols: 1, rows: 5, color: 'lightblue'},
		    {cols: 1, rows: 2, color: 'lightgreen'},
		    {cols: 1, rows: 4, color: 'lightpink'},
		    {cols: 1, rows: 4, color: '#DDBDF1'},
		    {cols: 1, rows: 3, color: '#A3A1B4'},
		    {cols: 2, rows: 8, color: '#DF1A34'},
		    {cols: 1, rows: 3, color: '#BCDF34'},
		    {cols: 1, rows: 3, color: '#A3AFC4'},
		    {cols: 2, rows: 4, color: '#DFC321'},
		    {cols: 1, rows: 5, color: 'lightblue'},
		    {cols: 1, rows: 2, color: 'lightgreen'},
		    {cols: 1, rows: 4, color: 'lightpink'},
		    {cols: 1, rows: 4, color: '#DDBDF1'},
		    {cols: 1, rows: 3, color: '#A3A1B4'},
		    {cols: 2, rows: 8, color: '#DF1A34'},
		    {cols: 1, rows: 3, color: '#BCDF34'},
		    {cols: 1, rows: 3, color: '#A3AFC4'},
		    {cols: 2, rows: 4, color: '#DFC321'}
		];

		this.getUser();
		this.getPics();
	}

	getUser(){
		this.appService.getUser().subscribe((data:any) => {
			this.user = data.data;
		});
	}

	getPics(){
		this.appService.getPics().subscribe((data:any) => {
			this.pics = data.data;
			console.log(this.pics);
		});		
	}


}
