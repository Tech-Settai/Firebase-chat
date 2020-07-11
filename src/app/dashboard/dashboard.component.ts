import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../service/auth-service.service';
import { SocketioService } from '../socketio.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public info = {};
  message:string; 
  messageHistry = [];

  constructor(private http: HttpClient,
    private auth: AuthServiceService,
    private socketService: SocketioService
    ) { }

  ngOnInit() {
    this.socketService.setupSocketConnection();
    this.socketService.socket.on('chat msg', (msg) => {
      console.log('msg:', msg);
      this.messageHistry.push(msg);
    });
    const token = this.auth.getStorage().token;
    this.http.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`)
    .subscribe(info => {
      this.info= info;
    });

  }



}
