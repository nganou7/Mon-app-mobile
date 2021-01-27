import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

import { PatientsService } from '../patients.service';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {
  public patienttableau:any=[];
  tab:any=[];
  public pat: any=[];
  constructor(private http:HttpClient,private patient:PatientsService) { }

  ngOnInit(){
  }
  sendSms(number){
    console.log(number.number);
    this.patienttableau=this.patient.sendSms(number.number).subscribe(data=>{
      console.warn(data);
    })
}
}
