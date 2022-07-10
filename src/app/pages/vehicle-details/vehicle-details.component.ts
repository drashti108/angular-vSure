import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ServiceRequestComponent } from 'src/app/model/service-request/service-request.component';
import { VehicleModelComponent } from 'src/app/model/vehicle-model/vehicle-model.component';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent implements OnInit {
  vehicalList:any;
  step = 0;
  name: string = "";
  color: string = "";

  constructor(public dialog: MatDialog) { }

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

  openVehicleDialog(vehicle:any) {
    const dialogRef = this.dialog.open(VehicleModelComponent, {
      data: { vehicle:vehicle }
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log("res---",res);
      
      this.color = res;
    });
  }

  openServiceDialog(){
    const dialogRef = this.dialog.open(ServiceRequestComponent, {
      // data: { vehicle:vehicle }
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log("res---",res);
      
    });
  }

}
