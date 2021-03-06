import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Tabs } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from"@angular/http";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ProfilePage } from '../pages/profile/profile';
import { CharityPage } from '../pages/charityInfo/charityInfo';
import { FindCharitiesPage } from '../pages/findCharitiesPage/findCharitiesPage';
import { PortfolioPage } from '../pages/portfolio/portfolio';
import { PaymentsPage } from '../pages/payments/payments';
import { AuthService } from '../auth.service';
import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { BrowsePage } from '../pages/browse/browse';
import { FavoritesPage } from '../pages/favorites/favorites';
import { StripeJavaScriptPage } from '../pages/stripe-java-script/stripe-java-script';
import { StripeNativePage } from '../pages/stripe-native/stripe-native';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    CharityPage,
    FindCharitiesPage,
    PortfolioPage,
    PaymentsPage, 
    TabsPage,
    SettingsPage, 
    BrowsePage, 
    FavoritesPage,
    StripeNativePage,
    StripeJavaScriptPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    CharityPage,
    FindCharitiesPage,
    PortfolioPage,
    PaymentsPage, 
    TabsPage, 
    SettingsPage, 
    BrowsePage, 
    FavoritesPage,
    StripeNativePage,
    StripeJavaScriptPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
