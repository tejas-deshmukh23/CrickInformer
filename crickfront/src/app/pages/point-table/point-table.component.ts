import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../../services/api-calls.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-point-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './point-table.component.html',
  styleUrl: './point-table.component.css'
})
export class PointTableComponent implements OnInit{
  pointTable:any;
  tableHeading:any;
  constructor(private _api:ApiCallsService){

  }
  ngOnInit(): void {
      this._api.getPointTable().subscribe({
        next:data=>{
          this.pointTable=data;
          this.tableHeading = this.pointTable[0];
          console.log(this.tableHeading);
          // console.log(this.pointTable);
        },
        error:error=>{
          console.log(error);
        }
      })
  }
}
