import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonMessageComponent } from 'src/app/model/common-message/common-message.component';
import { ServiceRequestComponent } from 'src/app/model/service-request/service-request.component';
import { VehicleModelComponent } from 'src/app/model/vehicle-model/vehicle-model.component';
import { FormControl, FormGroup } from '@angular/forms';

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
  detailOpen: boolean = false
  vehicleOpen: boolean = false

  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  @Input()
  hideToggle: boolean = false;

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

  headerClickOpen(num: number) {
    if(num == 0){
      this.detailOpen = true
    }else if(num == 1){
      this.vehicleOpen = true
    }
  }

  headerClickClose(num: number) {
    if(num == 0){
      this.detailOpen = false
    }else if(num == 1){
      this.vehicleOpen = false
    }
  }

  openVehicleDialog(vehicle:any) {
    const dialogRef = this.dialog.open(VehicleModelComponent, {
      data: { vehicle:vehicle },
      maxWidth: '100vw',
    });
    dialogRef.afterClosed().subscribe(res => {
      this.color = res;
    });
  }

  commonMessageShow(){
    const dialogRef = this.dialog.open(CommonMessageComponent, {
      data: { message:'Vehicle added successfully!', button:true, component:'service' },
      maxWidth: '100vw',
    });
    dialogRef.afterClosed().subscribe(res => {
    });
  }

}
