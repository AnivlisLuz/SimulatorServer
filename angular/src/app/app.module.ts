import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { APP_ROUTER } from './app.routes';
import { TablaDeDecisionComponent } from './tabla-de-decision/tabla-de-decision.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { TablResultadosComponent } from './tabla-de-decision/tabl-resultados/tabl-resultados.component';
import { TablCostosComponent } from './tables/tabl-costos/tabl-costos.component';
import { TablVentasComponent } from './tables/tabl-ventas/tabl-ventas.component';
import { TablBalanceGeneralComponent } from './tables/tabl-balance-general/tabl-balance-general.component';
import { JugarComponent } from './jugar/jugar.component';
import { ModeradorComponent } from './moderador/moderador.component';

import { HttpService } from './../services/http.service';
import { HttpModule } from '@angular/http';
import { TablaProduccionComponent } from './tablas-AI/tabla-produccion/tabla-produccion.component';
import { TablaVentasComponent } from './tablas-AI/tabla-ventas/tabla-ventas.component';
import { TablaVisionGeneralComponent } from './tablas-AI/tabla-vision-general/tabla-vision-general.component';
import { FinJuegoComponent } from './fin-juego/fin-juego.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ThousandsPipe } from './separador-de-miles/thousand.pipe';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { ScrollSpyModule } from './scroll-spy';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { VentanaModeradorComponent } from './ventana-moderador/ventana-moderador.component';


const config: SocketIoConfig = { url: '204.48.27.202:8063', options: {} };
@NgModule({
   declarations: [
      AppComponent,
      TablaDeDecisionComponent,
      LoginComponent,
      HomeComponent,
      RegisterComponent,
      TablResultadosComponent,
      TablCostosComponent,
      TablVentasComponent,
      TablBalanceGeneralComponent,
      JugarComponent,
      ModeradorComponent,
      TablaProduccionComponent,
      TablaVisionGeneralComponent,
      TablaVentasComponent,
      FinJuegoComponent,
      ThousandsPipe,
      routingComponents,
      VentanaModeradorComponent
   ],
   imports: [
      BrowserModule,
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      FormsModule,
      APP_ROUTER,
      HttpModule,
      ReactiveFormsModule,
      SocketIoModule.forRoot(config),
      AppRoutingModule,
      InViewportModule, ScrollSpyModule.forRoot(),
      BrowserAnimationsModule,
      ToastrModule.forRoot({
         preventDuplicates: true,
         positionClass: "toast-top-center",
       })

   ],
   providers: [AuthService],
   bootstrap: [AppComponent]
})
export class AppModule { }
