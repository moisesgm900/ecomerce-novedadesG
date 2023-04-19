import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ProviderService } from "src/app/services/provider/provider.service";
import {Router} from "@angular/router";
//import { MaterialModule } from 'src/app/components/material/material.module';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogacountComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogacountComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public provider: ProviderService,
    private router: Router,

  ) {
  }

  closeDialog(){
    this.dialogRef.close()
  }

}
