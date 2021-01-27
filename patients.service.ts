import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http:HttpClient) { }
  

  getAllpatient(){
    let url="https://tpmasterun.herokuapp.com/personnes/search/byRole?role=patient";
    return this.http.get(url);
  }


  getAllMedecin(){
    let url="https://tpmasterun.herokuapp.com/personnes/search/byRole?role=medecin";
    return this.http.get(url);
  }

  Registeruser(dataUser){
    console.log(dataUser);
    return this.http.post("https://tpmasterun.herokuapp.com/personnes",dataUser);
  }
}
