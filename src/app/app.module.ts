import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyModule } from './base/body/body.module';
import { FooterModule } from './base/footer/footer.module';
import { HeaderModule } from './base/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HeaderModule,
    BodyModule,
    FooterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
