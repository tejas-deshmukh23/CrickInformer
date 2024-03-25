import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(private _httpClient:HttpClient) { }

  // Creating a getAllMatches() method which will give us All Matches
  getAllMatches(){
    return this._httpClient.get(`${environment.apiUrl}/match`);
  } 
  // Creating a getLiveMatches() method which will give us Live Matches
  getLiveMatches(){
    return this._httpClient.get(`${environment.apiUrl}/match/live`);
  }
  // Creating a getPointTable() method which will give us Point Table
  getPointTable(){
    return this._httpClient.get(`${environment.apiUrl}/match/point-table`);
  }
}
