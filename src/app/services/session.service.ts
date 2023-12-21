import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, startWith } from 'rxjs';
import { Session } from '../models/session.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private emptySession: Session = {
    createdDate: new Date(),
    lastAccessDate: new Date(),
    players: [],
  }

  sessionSubject = new BehaviorSubject<Session>(this.emptySession);

  getCurrentSession() : Observable<Session> {
    return this.sessionSubject.asObservable();
  }
  
  setSession(newSession: Session): void {
    this.sessionSubject.next(newSession);
  }
 
}
