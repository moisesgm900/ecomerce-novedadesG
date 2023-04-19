import {Component, OnInit, Renderer2, ViewChild, Output, EventEmitter, AfterViewInit,} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError} from '@angular/router';
import { delay, filter } from 'rxjs/operators';
import { JwtAuthService } from '../services/auth/jwt-auth.service';
import { LocalStoreService } from '../services/local-store.service';
import { CloudinaryWidgetManager } from 'ngx-cloudinary-upload-widget';
import { ProviderService } from '../services/provider/provider.service';
import { environment } from 'src/environments/environment'
import {data} from "autoprefixer";
export interface Menu {
  link: string;
  icon: string;
}

@UntilDestroy()
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  items : any = 0;
  sesion =  0;
  anio = new Date().getFullYear();
 
  constructor(
    private jwtAuth: JwtAuthService,
    private observer: BreakpointObserver,
    public router: Router,
    private manager: CloudinaryWidgetManager,
    private provider: ProviderService,
    private renderer: Renderer2,
  ) {

  }
}

