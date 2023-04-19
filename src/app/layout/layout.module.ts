import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { CloudinaryModule } from '@cloudinary/ng';
import { NgxCloudinaryWidgetModule } from 'ngx-cloudinary-upload-widget';
import { environment } from 'src/environments/environment';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { PublicModule } from 
import { ErrorCatchingInterceptor } from '../services/auth/error-interceptor.service';
// import { PrivateSideNavbarComponent } from '../components/sidebars/private-side-navbar/private-side-navbar.component';
// import { PrivateSideNavbarListComponent } from '../components/sidebars/private-side-navbar-list/private-side-navbar-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { RoleGuard } from '../guards/role.guard';
import { NotFoundModule } from '../components/not-found/not-found.module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MaterialModule } from '../components/material/material.module';


@NgModule({
  declarations: [
    LayoutComponent,

  ],
    imports: [
        CommonModule,
        LayoutRoutingModule,
        CloudinaryModule,
        FormsModule,
        ReactiveFormsModule,
        NotFoundModule,
        NgxCloudinaryWidgetModule.forRoot({cloudName: environment.cloudName}),
        MatSlideToggleModule,
        MaterialModule
    ],
    exports : [LayoutComponent],
  providers: [

],
})
export class LayoutModule { }
