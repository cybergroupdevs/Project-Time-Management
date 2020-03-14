import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpParams
} from "@angular/common/http";

const FEED_API: string = "http://localhost:3000/api/employee";
const PROJECT_API: string = "http://localhost:3000/api/project";
const SHOW_PROJECTAPI: string = "http://localhost:3000/project";

@Injectable({
  providedIn: "root"
})
export class EmployeeService {
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) {}

  employeeCreateOrUpdate(obj: any, type: any): any {
    if (type === "create")
      return this.http.post<any>(FEED_API, obj, this.httpOptions);

    if (type === "update")
      return this.http.put<any>(FEED_API, obj, this.httpOptions);
  }
  projectCreateOrUpdate(obj: any, type: any): Observable<any> {
    if (type === "create")
      return this.http.post<any>(PROJECT_API, obj, this.httpOptions);

    if (type === "update")
      return this.http.put<any>(PROJECT_API, obj, this.httpOptions);
  }
  getEmployee(empId: string): any {
    if (!empId) {
      return this.http.get<any>(FEED_API, { ...this.httpOptions });
    }
    const params = new HttpParams().set("empId", empId);
    return this.http.get<any>(FEED_API, { ...this.httpOptions, params });
  }

  getProject(projectId: string): any {
    // let convertedId: { $toObjectId: "$projectId" }

    const params = new HttpParams().set("projectId", projectId);
    return this.http.get<any>(SHOW_PROJECTAPI, { ...this.httpOptions, params });
  }

  deleteEmployee(empId: string): any {
    const params = new HttpParams().set("empId", empId);
    return this.http.delete<any>(FEED_API, { ...this.httpOptions, params });
  }
  deleteProject(id: string): any {
    const params = new HttpParams().set("id", id);
    return this.http.delete<any>(PROJECT_API, { ...this.httpOptions, params });
  }
  searchEmp(name: any): Observable<any> {
    const params = new HttpParams().set("name", name);
    return this.http.get<any>("http://localhost:3000/employees/search", {
      ...this.httpOptions,
      params
    });
  }
  searchProjects(name: any): Observable<any> {
    const params = new HttpParams().set("projectName", name);
    return this.http.get<any>("http://localhost:3000/projects/search", {
      ...this.httpOptions,
      params
    });
  }
}
