import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  public medecintableau:any=[];
  tab:any=[];
  public pat: any=[];
  constructor(private patient:PatientsService) { }

  ngOnInit() {
    this.medecintableau=this.patient.getAllMedecin().subscribe(data=>{
      this.tab=data;
        this.tab._embedded.personnes.forEach(c=>{
            this.pat.push(c);
        });
      console.warn(data);
    })
  }

}
