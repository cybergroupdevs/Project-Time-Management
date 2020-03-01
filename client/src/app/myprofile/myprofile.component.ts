import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent implements OnInit {
  employee: any;


  constructor(private _service:EmployeeService,
    private router: Router,
    private route: ActivatedRoute) {  }
    
  ngOnInit(): any {
    const token = localStorage.getItem('Authorization');
      
    // //Decode JWT and return the Payload in JSON Format
   const decodeToken= this.jsonDecoder(token);
   console.log(decodeToken);
   console.log(decodeToken.data.empId);
   
   return this._service.getEmployee(decodeToken.data.empId).subscribe((response: any) => {
    console.log(response);
        console.log(response.payload.employee);
     return (this.employee = response.payload.employee);
      });
}

jsonDecoder = (token) => {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
  return JSON.parse(jsonPayload);
};
}
