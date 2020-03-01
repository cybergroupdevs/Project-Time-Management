
import { Component, OnInit } from '@angular/core';
import {SendHttpRequestService} from '../services/send-http-request.service'
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private http:SendHttpRequestService) { }

  ngOnInit() {
    this.http.logout().subscribe(data=>{
      if(data.success){
        this.router.navigate()
      }
      else{
        window.alert("some problem");
      }
    })
  }

}
