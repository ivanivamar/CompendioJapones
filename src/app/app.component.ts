import {Component, HostListener, Inject, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DOCUMENT} from "@angular/common";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
    providers: [HttpClient]
})
export class AppComponent implements OnInit {
    title = 'Compendio Japones';

    verbs: any;
    sustantivos: any;
    activeTab = 'verbos';
    currentPosition = window.pageYOffset;

    constructor(
        private http: HttpClient
    ) {
    }

    ngOnInit() {
        this.http.get('../assets/verbos.json').subscribe(data => {
            this.verbs = data;
        });
        this.http.get('../assets/sustantivos.json').subscribe(data => {
            this.sustantivos = data;
        });
    }
}

export interface Verb {
    kana: string;
    tekei: string;
    kanji: string;
    romanji: string;
    translation: string;
}
