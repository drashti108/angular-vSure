import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-vehicle-model',
  templateUrl: './vehicle-model.component.html',
  styleUrls: ['./vehicle-model.component.scss']
})
export class VehicleModelComponent implements OnInit {
  vehicle:any
  constructor(
    public dialogRef: MatDialogRef<VehicleModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
  { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.vehicle = this.data.vehicle
    console.log("data---",this.data, this.vehicle);
  }

}
