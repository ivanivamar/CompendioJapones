import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { VerbsCardComponent } from './common/verbs-card/verbs-card.component';
import { SearchComponent } from './common/search/search.component';
import {FormsModule} from "@angular/forms";
import {SustantivosCardComponent} from "./common/sustantivos-card/sustantivos-card.component";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    declarations: [
        AppComponent,
        VerbsCardComponent,
        SearchComponent,
        SustantivosCardComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        MatCheckboxModule,
    ],
    providers: [
    provideAnimationsAsync()
  ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
