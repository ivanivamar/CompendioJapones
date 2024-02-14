import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass',
    providers: [HttpClient]
})
export class AppComponent implements OnInit {
    title = 'Compendio Japones';

    private URL = '../assets/verbos.json';
    verbs: any;

    activeTab = 'verbos';

    constructor(
        private http: HttpClient
    ) {
    }

    ngOnInit() {
        this.http.get(this.URL).subscribe(data => {
            this.verbs = data;
            console.log(this.verbs);
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
