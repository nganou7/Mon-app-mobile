import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http:HttpClient) { }

  getAllpatient(){
    let url="https://tpmasterun.herokuapp.com/personnes";
    return this.http.get(url);
  }


  getAllMedecin(){
    let url="https://tpmasterun.herokuapp.com/personnes";
    return this.http.get(url);
  }
  Registeruser(dataUser){
    console.log(dataUser);
    return this.http.post("https://tpmasterun.herokuapp.com/personnes",dataUser);
 
  }
  

  sendSms(numer){
    
    let url="https://www.easysendsms.com/sms/bulksms-api/bulksms-api?username=ataltalo2021&password=esm76376&from=Test&to=+237655667191&text=Hello%20world&type=0";
    return this.http.get(url);
  }
 
}

