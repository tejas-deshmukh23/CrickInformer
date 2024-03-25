import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../services/api-calls.service';
import { error } from 'console';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit{

  constructor(private _api:ApiCallsService){

  }

  ngOnInit(): void {
      this._api.getLiveMatches().subscribe({
        next:data=>{
          console.log(data);
        },
        error:error=>{
          console.log(error);
        }
      })
  }


}
