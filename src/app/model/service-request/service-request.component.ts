import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.scss']
})
export class ServiceRequestComponent implements OnInit {
  isEmergency:boolean = false;
  isSelect:boolean = false;
  apiLoaded: Observable<boolean>;

  constructor(
    public dialogRef: MatDialogRef<ServiceRequestComponent>,
    httpClient: HttpClient
  ){
    this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE', 'callback')
    .pipe(
      map(() => true),
      catchError(() => of(false)),
    );
  }
  
  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleType(event:any){
    console.log("event==",event.target.name, event.target.value);
    this.isSelect = true;
    if(event.target.value == 'Emergency'){
      this.isEmergency = true
    }else{
      this.isEmergency = false
    }
  }

}
