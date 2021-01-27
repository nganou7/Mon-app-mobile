import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../patients.service';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  public patienttableau:any=[];
  tab:any=[];
  public pat: any=[];
  constructor(private patient:PatientsService) { }

  ngOnInit() {
    this.patienttableau=this.patient.getAllpatient().subscribe(data=>{
      this.tab=data;
        this.tab._embedded.personnes.forEach(c=>{
            this.pat.push(c);
        });
      console.warn(data);
    })
  }

}
