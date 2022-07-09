import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {
  vehicalList:any;
  step = 0;
  
  constructor() { }

  ngOnInit(): void {
    this.vehicalList = [
      {
        type:"4 wheeler (MH46XY5300)",
        rNumber:"< MH46XY5300 >",
        make:"Honda",
      },
      {
        type:"2 wheeler (MH46XY5300)",
        rNumber:"< MH46XY5300 >",
        make:"Honda",
      },
      {
        type:"4 wheeler (MH46XY5300)",
        rNumber:"< MH46XY5300 >",
        make:"Honda",
      },
      {
        type:"2 wheeler (MH46XY5300)",
        rNumber:"< MH46XY5300 >",
        make:"Honda",
      }
    ]
  }

  setStep(index: number) {
    this.step = index;
  }

}
