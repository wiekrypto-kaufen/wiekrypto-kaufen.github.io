import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ExchangesBandComponent } from './exchanges-band/exchanges-band.component';
import { Steps3Component } from './steps3/steps3.component';
import { TutorialsOverviewComponent } from './tutorials-overview/tutorials-overview.component';
import { AdsenseBannerComponent } from './adsense-banner/adsense-banner.component';
import { HomeComponent } from './pages/home/home.component';
import { ImpressumComponent } from './pages/impressum/impressum.component';
import { BinanceComponent } from './pages/binance/binance.component';
import { CoinbaseComponent } from './pages/coinbase/coinbase.component';
import { CryptoComComponent } from './pages/crypto-com/crypto-com.component';
import { HuobiComponent } from './pages/huobi/huobi.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ExchangesBandComponent,
    Steps3Component,
    TutorialsOverviewComponent,
    AdsenseBannerComponent,
    HomeComponent,
    ImpressumComponent,
    BinanceComponent,
    CoinbaseComponent,
    CryptoComComponent,
    HuobiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
