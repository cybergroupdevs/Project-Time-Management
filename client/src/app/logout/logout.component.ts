
import { Component, OnInit } from '@angular/core';
import {SendHttpRequestService} from '../send-http-request.service'
import{Router} from '@angular/router'
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private http:SendHttpRequestService,private router:Router) { }

  ngOnInit() {
    this.http.logout().subscribe(data=>{
      if(data.success){
        this.router.navigate(["/login"])
      }
      else{
        window.alert("some problem");
      }
    })
  }

}
