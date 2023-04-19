import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ProviderService } from 'src/app/services/provider/provider.service';
import { DialogComponent } from './dialog/dialog.component';
import { DialogacountComponent } from './dialogaccount/dialog.component';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos: any;
  mostrarsl : any;
  paginador: any;
  name : any = '';
  pageSizeOptions: number[] = [9, 12, 16,30, 100]

  constructor(private provider: ProviderService,
              private dialog:MatDialog) { 
  
  }

  ngOnInit(): void {
    this.getProducts();
  }
  
  getProducts(){
      this.provider.BD_ActionPost('productos', 'index',{}).subscribe({
        next:(data:any)=>{
          this.productos = data;
          console.log(this.productos)
          this.mostrarsl = this.productos.slice(0,9)
          this.paginador = data;
          console.log(this.mostrarsl)
            
        },error:(err )=>{
          console.log(err)
        }
      })
    
  }
  cambioPagina(event: PageEvent){
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.paginador?.length){
      endIndex = this.paginador?.length
    }
    this.mostrarsl = this.paginador.slice(startIndex, endIndex);

  }
  
  verproduct(producto : any){
    this.dialog.open(DialogComponent, {
      data: producto,
      autoFocus: false,
      width:"70%",
    },
)
  }
  CreateAcount(){
    this.dialog.open(DialogacountComponent, {
      autoFocus: false,
      width:"auto",
    },
    ) 
 
  }

  AddShoppingCart(){
      alert("HOLA")
  }

}
