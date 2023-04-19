import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

import { ProviderService } from "src/app/services/provider/provider.service";
import {Router} from "@angular/router";
//import { MaterialModule } from 'src/app/components/material/material.module';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  dashboard: any;
  searchs : any;
  text: any;
  images: any;
  ShowImage: any;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public provider: ProviderService,
    private router: Router,

  ) {
    this.ShowImage = data.imagen
    this.ProductsImages();
  }
  getAllDashboard(){
    this.provider.BD_ActionPost('dashboard','allDashboard',{}).subscribe({
      next:(data:any)=>{
        this.dashboard = data;
        this.searchs = data
        console.log(data)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  openEventosDetail(data:any, route: any){
    console.log(route)
    this.router.navigate([route+'/detail' , btoa(data.id)])
    this.closeDialog()
  }
  search(event: any){

    this.text =  (event.target as HTMLInputElement)?.value?.trim()?.toLocaleLowerCase()?.normalize('NFD')?.replace(/[\u0300-\u036f]/g, "")  ;
    //console.log(this.text)
    if (this.text== '') {
      this.getAllDashboard()
    }else {
      let dashbor = this.searchs.filter((c: { content: any, name: any, categoria: any }) =>
          (c?.content?.toString().toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(this.text) ||
          (c?.categoria?.toString().toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(this.text))
              || c?.name?.toString().toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(this.text)) );
      //this.paginador = mentores;

      //console.log(dashbor)
      return this.dashboard = dashbor;
    }
  }
  ngOnInit(): void {
  
  };

  closeDialog(){
    this.dialogRef.close()
  }
  ProductsImages(){
    this.provider.BD_ActionPost('productos','getImages',{id:this.data.id} ).subscribe({
      next : (data: any)=>{
        this.images = data;
        this.images.push(this.data)
        console.log(this.images);
      }, error: (error: any) => {
      }
    })
  }
  changeimage(img : any){
    this.ShowImage = img
  }

}
