import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Report } from '../report';

@Injectable({
  providedIn: 'root'
})
export class ReportListService {

  constructor(public http: HttpClient) { }

  getReportList() {
    return this.http.get('/reports');
  }

  deleteReport(reportId: string) {
    return this.http.delete('/reports/delete/' + reportId);
  }

  submitReport(report: Report) {
    var httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post('/reports', report, httpOptions);
  }
}
