import { LoginModule } from './modules/login/login.module';
import { AboutUsModule } from './modules/about-us/about-us.module';
import { SignUpComponent } from './modules/sign-up/sign-up.component';
import { LoginComponent } from './modules/login/login.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{ path :'',loadChildren:()=>import('./modules/home/home.module').then(m=>m.HomeModule)},

{ path:'about-us',loadChildren:()=>import('./modules/about-us/about-us.module').then(m=>m.AboutUsModule)},
{ path:'contact-us',loadChildren:()=>import('./modules/contact-us/contact-us.module').then(m=>m.ContactUsModule)},
{ path:'sign-in',loadChildren:()=>import('./modules/login/login.module').then(
  m=>m.LoginModule)},
{ path:'sign-up',loadChildren:()=>import('./modules/sign-up/sign-up.module').then(m=>m.SignUpModule)},


];
//loadChildren: () => import('./items/items.module').then(m => m.ItemsModule)
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
