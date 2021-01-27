import { Component} from '@angular/core';
import { PatientsService } from './patients.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(private patient:PatientsService){
  //   this.patient.getAllpatient().subscribe(data=>{
  //     console.warn(data);
  //   })
  // }

}
