import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../services/api-calls.service';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [CommonModule,MatchCardComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit{

  
  liveMatches : any;

  constructor(private _api:ApiCallsService){

  }

  ngOnInit(): void {
     this.loadLiveMatches();
  }

  private loadLiveMatches()
  {
    this._api.getLiveMatches().subscribe({
      next:data=>{
        console.log(data);
        this.liveMatches=data;
      },
      error:error=>{
        console.log(error);
      }
    })
  }


}
