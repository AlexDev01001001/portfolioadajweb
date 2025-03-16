import { Routes,Router,RouterModule} from '@angular/router';
import { MainComponent } from './component/main/main.component';




export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:MainComponent}
];

export const AppRoutingModule = RouterModule.forRoot(routes);
