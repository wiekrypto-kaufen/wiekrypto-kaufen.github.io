import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BinanceComponent } from './pages/binance/binance.component';
import { CoinbaseComponent } from './pages/coinbase/coinbase.component';
import { CryptoComComponent } from './pages/crypto-com/crypto-com.component';
import { HomeComponent } from './pages/home/home.component';
import { HuobiComponent } from './pages/huobi/huobi.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'impressum', component: ImpressumComponent},
  { path: 'binance', component: BinanceComponent},
  { path: 'coinbase', component: CoinbaseComponent},
  { path: 'crypto-com', component: CryptoComComponent},
  { path: 'huobi', component: HuobiComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
