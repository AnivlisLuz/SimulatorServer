import { VentanaModeradorComponent } from './ventana-moderador/ventana-moderador.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TablaDeDecisionComponent } from './tabla-de-decision/tabla-de-decision.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JugarComponent } from './jugar/jugar.component';
import { ModeradorComponent } from './moderador/moderador.component';
import { FinJuegoComponent } from './fin-juego/fin-juego.component';

const APPROUTES: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'tabla', component: TablaDeDecisionComponent },
    { path: 'tabla/:nombreEmpresa', component: TablaDeDecisionComponent },
    { path: 'tabla/:nombreEmpresa/:codigo', component: TablaDeDecisionComponent },
    { path: 'home', component: HomeComponent },
    { path: 'jugar', component: JugarComponent },
    { path: 'moderador', component: ModeradorComponent },
    { path: 'ingresoPuntajes', component: VentanaModeradorComponent },

    { path: 'fin', component: FinJuegoComponent },
    { path: 'fin/:numeroBimestre', component: FinJuegoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

// tslint:disable-next-line:eofline
export const APP_ROUTER = RouterModule.forRoot(APPROUTES);
