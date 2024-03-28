import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../services/api-calls.service';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule,MatchCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{

  allMatch:any;
  constructor(private _api:ApiCallsService){//here we gets the object of ApiCallsService class which has the getAllMatches method which had fethed the matches from backend APIs

  }
  ngOnInit(): void {
      this._api.getAllMatches().subscribe({
        next:data=>{
          this.allMatch=data;
        },
        error:error=>{
          console.log(error);
        }
      });
      
  }
}
