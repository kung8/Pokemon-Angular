import { Component, OnInit, DoCheck} from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import {Location} from '@angular/common'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor(private router: Router,private route: ActivatedRoute,private location:Location) { 
  }
  url: String = ''
  
  ngOnInit() {
    this.url = this.location._platformLocation.location.pathname
    console.log(this.url)
  }

  ngDoCheck(){
    if(this.url != this.location._platformLocation.location.pathname){
      this.url = this.location._platformLocation.location.pathname
    }
  }

}

// export class HeaderComponent implements DoCheck {
// }
