import { inject, Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { RoomListParams } from '../models/room-list-params';
import { Observable } from 'rxjs';
import { Page } from '../models/page';
import { Room } from '../models/room';
import { HttpClient } from '@angular/common/http';
import { buildParams } from '../utils/param-util';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  // getById(id: string) {
  //   throw new Error('Method not implemented.');
  // }
  // api_url
  // request param

  private http = inject(HttpClient);
  private base = `${environment.apiUrl}`;

  // room search pagination

  constructor() { }

  list(params?: RoomListParams): Observable<Page<Room>> {
    return this.http.get<Page<Room>>(this.base + '/api/rooms/search/pagination', {params: buildParams(params)});
  }

  /** GET /room/{id} */
  getById(id: string): Observable<Room> {
    return this.http.get<Room>(`${this.base}/api/rooms/${id}`);
  }

  getByIds(ids: string[]): Observable<Room[]> {
    const params = buildParams({ ids }); //  buildParams supports arrays 
    return this.http.get<Room[]>(`${this.base}/api/rooms/by-ids`, { params });
  }

}
