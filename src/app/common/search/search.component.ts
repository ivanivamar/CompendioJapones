import {Component, Input} from '@angular/core';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.sass'
})
export class SearchComponent {
    @Input() verbos: any;
    @Input() sustantivos: any;
    @Input() adjetivos: any;

    search = '';
    filters: any = {
        verbos: true,
        adjetivos: true,
        sustantivos: true,
        sustantivosTypes: {
            Lugar: true,
            Objeto: true,
            Profesión: true,
        }
    }
    active = false;
    searchResults: any[] = [];
    hasVerbs = false;
    hasAdjetivos = false;
    hasSustantivos = false;
    showFilters = false;

    constructor() {
    }

    onInputSearch() {
        this.searchResults = [];
        this.hasVerbs = false;
        this.hasAdjetivos = false;
        this.hasSustantivos = false;
        if (this.search.trim().length > 0) {
            if (this.filters.verbos) {
                this.verbos.forEach((verbo: any) => {
                    if (
                        verbo.romanji.toLowerCase().includes(this.search.toLowerCase()) ||
                        verbo.translation.toLowerCase().includes(this.search.toLowerCase()) ||
                        verbo.kana.toLowerCase().includes(this.search.toLowerCase())) {
                        this.searchResults.push({
                            type: 'verbo',
                            data: verbo
                        });
                        this.hasVerbs = true;
                    }
                });
            }
            if (this.filters.sustantivos) {
                this.sustantivos.forEach((sustantivo: any) => {
                    console.log(sustantivo.kana);
                    if (
                        (sustantivo.romanji.toLowerCase().includes(this.search.toLowerCase()) ||
                        sustantivo.translation.toLowerCase().includes(this.search.toLowerCase()) ||
                        sustantivo.kana.toLowerCase().includes(this.search.toLowerCase())) &&
                        this.filters.sustantivosTypes[sustantivo.type]
                    ) {
                        this.searchResults.push({
                            type: 'sustantivo',
                            data: sustantivo
                        });
                        this.hasSustantivos = true;
                    }
                });
            }
        }
    }

    clearSearch() {
        this.search = '';
        this.searchResults = [];
        this.hasVerbs = false;
        this.hasAdjetivos = false;
        this.hasSustantivos = false;
    }
}
