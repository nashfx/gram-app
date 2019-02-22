import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'gram-app';
  	tiles: any = [];
 	user: any;
	pics: any;

	constructor(
  		private appService: AppService
  	){}


	ngOnInit(){
		this.tiles = [
		    {text: 'One', cols: 1, rows: 5, color: 'lightblue'},
		    {text: 'Two', cols: 1, rows: 2 	, color: 'lightgreen'},
		    {text: 'Three', cols: 1, rows: 4, color: 'lightpink'},
		    {text: 'Four', cols: 1, rows: 4, color: '#DDBDF1'},
		    {text: 'Six', cols: 1, rows: 3, color: '#A3A1B4'},
		    {text: 'Five', cols: 2, rows: 8, color: '#DF1A34'},
		    {text: 'Seven', cols: 1, rows: 3, color: '#BCDF34'},
		    {text: 'Eight', cols: 1, rows: 3, color: '#A3AFC4'},
		    {text: 'Nine', cols: 2, rows: 4, color: '#DFC321'}
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
			console.log(data.data);
		});		
	}


}
