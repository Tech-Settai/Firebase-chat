import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { AuthServiceService } from './service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socket;
  constructor(private auth: AuthServiceService) { }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
  }

  sendMessage(msg: string) {
    const profile =this.auth.getStorage();
    this.socket.emit('my message', {  message: msg, user: profile.name, dp: profile.dp });
  }


}
