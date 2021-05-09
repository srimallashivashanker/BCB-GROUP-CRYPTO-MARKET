import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoPriceComponent } from './crypto-price/crypto-price.component';
import { CryptoDetailComponent } from './crypto-detail/crypto-detail.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  { path: '404', component: NotfoundComponent },
  { path: '', component: CryptoPriceComponent },
  { path: ':symbol', component: CryptoDetailComponent },
  { path: '**', redirectTo: '/404' } 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
