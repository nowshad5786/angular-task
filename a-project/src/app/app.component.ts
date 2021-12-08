import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a-project';
  name = "Nowshad Sk";
  getN(per: string){
    console.log(per);
    return per;
  }
  names(){
    console.log("click")
  }
  getName(){
    console.log("keyup occured");
  }
  getM(){
    console.log("keyDown cooured");
  }
  getP(){
    console.log("Mouseover");
  }
fname ="Nsd"
disabledBox = true
enableInput(){
  this.disabledBox=false
}
}
