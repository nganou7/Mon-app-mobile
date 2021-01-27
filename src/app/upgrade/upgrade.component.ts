import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Output, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-upgrade',
  templateUrl: './upgrade.component.html',
  styleUrls: ['./upgrade.component.css']
})
export class UpgradeComponent implements OnInit {
  
  constructor(private http:HttpClient) { }

  ngOnInit() {
    //alert("ok mercie ser55");
//     var video = document.querySelector("#videoElement");

// if (navigator.mediaDevices.getUserMedia) {
//   navigator.mediaDevices.getUserMedia({ video: true })
//     .then(function (stream) {
//       console.log(video);
//       //video.srcObject = stream;
//     })
//     .catch(function (err0r) {
//       console.log("Something went wrong!sss");

//     });
// }
  }
  @Input() paused;
  @Output() backward = new EventEmitter();
  @Output() pauseplay = new EventEmitter();
  @Output() forward = new EventEmitter();
  @Output() random = new EventEmitter();
  @Output() stop = new EventEmitter();
}

