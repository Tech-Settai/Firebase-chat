import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './service/auth-service.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import { SocketioService } from './socketio.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public credential;
  public user;
  public displayName='';
public email:any = 'visu';
  title = 'firebaseAuthSample';
  constructor(private socketService: SocketioService, private http: HttpClient) { 
}

ngOnInit() {

}

}
