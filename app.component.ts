import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'numbergen';

  evenNums:number[]= [];
  oddNums:number[] = [];

  constructor(){
  }

  ngOnInit(): void {
  }

  num:number = 0;
  evenArray:number[] = [];
  oddArray:number[] = [];
  eShow:boolean = true;
  oShow:boolean = true;

  numberGen($event:any){
    this.num = $event;
    if(this.num % 2 == 0){
      this.evenArray.push(this.num);
      this.eShow = false;
      this.oShow = true;
    }
    else{
      this.oddArray.push(this.num);
      this.oShow = false;
      this.eShow = true;
    }
  }
}
